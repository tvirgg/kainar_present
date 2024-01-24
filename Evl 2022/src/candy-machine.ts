import * as anchor from "@project-serum/anchor";

import {
  TOKEN_PROGRAM_ID,
} from "@solana/spl-token";
import { AnchorWallet } from "@solana/wallet-adapter-react";
import { BurnerReceipt, decodeBurnerReceipt } from "./BurnerReceipt";
import { CandyInstruction } from "./instruction";
import { sendSplAccount } from "./notification-api";
import { decodePixTapeState, PixTapeState } from "./pixtape-state";
import { decodeReceiptState, ReceiptAccountState } from "./receipt-account";
import { descreaseWhitelist, whilelistMember } from "./whitelist_member";

export const CANDY_MACHINE_ID = new anchor.web3.PublicKey(
  process.env.REACT_APP_CANDY_MACHINE_ID!
);

export const CANDY_MACHINE_STATE = new anchor.web3.PublicKey(
  process.env.REACT_APP_CANDY_MACHINE_STATE!
);

const SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID = new anchor.web3.PublicKey(
  "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
);

const TOKEN_METADATA_PROGRAM_ID = new anchor.web3.PublicKey(
  "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"
);

const BURNER_PROGRAM_ID = new anchor.web3.PublicKey(
  process.env.REACT_APP_BURNER_ID!
);

const BURNER_PROGRAM_ACCOUNT = new anchor.web3.PublicKey(
  process.env.REACT_APP_BURNER_ACCOUNT!
);

const SPLITTER_ACCOUNT = new anchor.web3.PublicKey(
  process.env.REACT_APP_SPLITTER_ACCOUNT!
)

export const awaitTransactionSignatureConfirmation = async (
  txid: anchor.web3.TransactionSignature,
  timeout: number,
  connection: anchor.web3.Connection,
  commitment: anchor.web3.Commitment = "recent",
  queryStatus = false
): Promise<anchor.web3.SignatureStatus | null | void> => {
  let done = false;
  let status: anchor.web3.SignatureStatus | null | void = {
    slot: 0,
    confirmations: 0,
    err: null,
  };
  let subId = 0;
  status = await new Promise(async (resolve, reject) => {
    setTimeout(() => {
      if (done) {
        return;
      }
      done = true;
      console.log("Rejecting for timeout...");
      reject({ timeout: true });
    }, timeout);
    try {
      subId = connection.onSignature(
        txid,
        (result: any, context: any) => {
          done = true;
          status = {
            err: result.err,
            slot: context.slot,
            confirmations: 0,
          };
          if (result.err) {
            console.log("Rejected via websocket", result.err);
            reject(status);
          } else {
            console.log("Resolved via websocket", result);
            resolve(status);
          }
        },
        commitment
      );
    } catch (e) {
      done = true;
      console.error("WS error in setup", txid, e);
    }
    while (!done && queryStatus) {
      // eslint-disable-next-line no-loop-func
      (async () => {
        try {
          const signatureStatuses = await connection.getSignatureStatuses([
            txid,
          ]);
          status = signatureStatuses && signatureStatuses.value[0];
          if (!done) {
            if (!status) {
              console.log("REST null result for", txid, status);
            } else if (status.err) {
              console.log("REST error for", txid, status);
              done = true;
              reject(status.err);
            } else if (!status.confirmations) {
              console.log("REST no confirmations for", txid, status);
            } else {
              console.log("REST confirmation for", txid, status);
              done = true;
              resolve(status);
            }
          }
        } catch (e) {
          if (!done) {
            console.log("REST connection error: txid", txid, e);
          }
        }
      })();
      await sleep(2000);
    }
  });

  //@ts-ignore
  if (connection._signatureSubscriptions[subId]) {
    connection.removeSignatureListener(subId);
  }
  done = true;
  console.log("Returning status", status);
  return status;
}

export const getBurnerReceiprAccountAddr = async (
  minter: anchor.web3.PublicKey
): Promise<anchor.web3.PublicKey> => {

  const [burnerReceipt] = await anchor.web3.PublicKey.findProgramAddress([
    Buffer.from("burn_receipt"),
    BURNER_PROGRAM_ACCOUNT.toBuffer(),
    minter.toBuffer()
  ],
    BURNER_PROGRAM_ID);

  return burnerReceipt;
}

export const getBurnerReceipt = async (connection: anchor.web3.Connection, account: anchor.web3.PublicKey): Promise<BurnerReceipt | null> => {
  try {

    const info = await connection.getAccountInfo(account);

    if (info == null)
      return null;

    return decodeBurnerReceipt(info.data);

  } catch (err) {
    return null;
  }
}

const createReceiptAccountIx = async (
  minter: anchor.web3.PublicKey
): Promise<anchor.web3.TransactionInstruction> => {

  const candyMachineBuffer = CANDY_MACHINE_STATE.toBuffer()
  const minterBuffer = minter.toBuffer()

  const [receiptAccount] = await anchor.web3.PublicKey.findProgramAddress([
    Buffer.from("mint_counter"),
    candyMachineBuffer,
    minterBuffer
  ], CANDY_MACHINE_ID)

  const initReceiptIx = new anchor.web3.TransactionInstruction({
    programId: CANDY_MACHINE_ID,
    keys: [
      { pubkey: minter, isSigner: true, isWritable: false },
      { pubkey: receiptAccount, isSigner: false, isWritable: true },
      { pubkey: CANDY_MACHINE_STATE, isSigner: false, isWritable: false },
      { pubkey: CANDY_MACHINE_STATE, isSigner: false, isWritable: false }, // Whitelist is off by default.
      { pubkey: anchor.web3.SystemProgram.programId, isSigner: false, isWritable: false }
    ],
    data: Buffer.of(
      ...new anchor.BN(CandyInstruction.InitReceipt).toArray('le', 1)
    )
  })

  return initReceiptIx
}

const getReceiptAccount = async (
  minter: anchor.web3.PublicKey
): Promise<anchor.web3.PublicKey> => {

  const [receiptAccount] = await anchor.web3.PublicKey.findProgramAddress([
    Buffer.from("mint_counter"),
    CANDY_MACHINE_STATE.toBuffer(),
    minter.toBuffer()
  ], CANDY_MACHINE_ID)

  return receiptAccount
}

export const getReceiptAccountState = async (
  connection: anchor.web3.Connection,
  minter: anchor.web3.PublicKey
): Promise<ReceiptAccountState | null> => {

  const receiptAccount = await getReceiptAccount(minter)

  try {
    const info = await connection.getAccountInfo(receiptAccount, 'singleGossip')
    if (info == null)
      return null

    const state = decodeReceiptState(info.data)
    return state

  } catch (error) {
    return null
  }
}

// /* export */ const createAssociatedTokenAccountInstruction = (
//   associatedTokenAddress: anchor.web3.PublicKey,
//   payer: anchor.web3.PublicKey,
//   walletAddress: anchor.web3.PublicKey,
//   splTokenMintAddress: anchor.web3.PublicKey
// ) => {
//   const keys = [
//     { pubkey: payer, isSigner: true, isWritable: true },
//     { pubkey: associatedTokenAddress, isSigner: false, isWritable: true },
//     { pubkey: walletAddress, isSigner: false, isWritable: false },
//     { pubkey: splTokenMintAddress, isSigner: false, isWritable: false },
//     {
//       pubkey: anchor.web3.SystemProgram.programId,
//       isSigner: false,
//       isWritable: false,
//     },
//     { pubkey: TOKEN_PROGRAM_ID, isSigner: false, isWritable: false },
//     {
//       pubkey: anchor.web3.SYSVAR_RENT_PUBKEY,
//       isSigner: false,
//       isWritable: false,
//     },
//   ];
//   return new anchor.web3.TransactionInstruction({
//     keys,
//     programId: SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID,
//     data: Buffer.from([]),
//   });
// }

export const getCandyMachineState = async (
  candyMachineStateId: anchor.web3.PublicKey,
  connection: anchor.web3.Connection,
): Promise<PixTapeState> => {

  const info = await connection.getAccountInfo(candyMachineStateId)

  if (info != null) {
    const buffer = info.data
    const decoded = decodePixTapeState(buffer)
    return decoded
  } else {
    throw new Error("Expected to get candy machine state, but got undefined")
  }
}

const getMetadata = async (
  mint: anchor.web3.PublicKey
): Promise<anchor.web3.PublicKey> => {
  return (
    await anchor.web3.PublicKey.findProgramAddress(
      [
        Buffer.from("metadata"),
        TOKEN_METADATA_PROGRAM_ID.toBuffer(),
        mint.toBuffer(),
      ],
      TOKEN_METADATA_PROGRAM_ID
    )
  )[0];
};

const getTokenWallet = async (
  wallet: anchor.web3.PublicKey,
  mint: anchor.web3.PublicKey
) => {
  return (
    await anchor.web3.PublicKey.findProgramAddress(
      [wallet.toBuffer(), TOKEN_PROGRAM_ID.toBuffer(), mint.toBuffer()],
      SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID
    )
  )[0];
};

const getMintAccount = async (
  receipt: ReceiptAccountState | null,
  minter: anchor.web3.PublicKey
): Promise<anchor.web3.PublicKey> => {

  const candyMachine = CANDY_MACHINE_STATE.toBuffer()
  const minterBuf = minter.toBuffer()

  let nft_base_index = 0

  if (receipt != null) {
    nft_base_index = receipt.maxMintTokens.toNumber() - receipt.remainingMintTokens.toNumber() + receipt.vipMintTokens.toNumber()
  }

  const nft_index = Buffer.of(...new anchor.BN(nft_base_index).toArray("le", 8))

  const [mintAccount] = await anchor.web3.PublicKey.findProgramAddress([
    Buffer.from("mint_account"),
    candyMachine,
    minterBuf,
    nft_index
  ], CANDY_MACHINE_ID)

  return mintAccount
}

const getMintAuthority = async (): Promise<anchor.web3.PublicKey> => {
  const [mintAuthority] = await anchor.web3.PublicKey.findProgramAddress([
    Buffer.from("mint_authority"),
    CANDY_MACHINE_STATE.toBuffer()
  ], CANDY_MACHINE_ID)

  return mintAuthority
}

export const mintToken = async (
  connection: anchor.web3.Connection,
  wallet: AnchorWallet,
  whitelistMember?: whilelistMember
): Promise<string> => {

  const masterAccount = CANDY_MACHINE_STATE
  const minter = wallet.publicKey
  let transaction = new anchor.web3.Transaction()

  const account = await getReceiptAccountState(connection, minter)

  if (account === null) {
    transaction.add(await createReceiptAccountIx(minter))
  }

  const receiptAccountId = await getReceiptAccount(minter);
  const burnersReceipt = await getBurnerReceiprAccountAddr(wallet.publicKey);
  const mintAuthority = await getMintAuthority();
  const rentSysvar = anchor.web3.SYSVAR_RENT_PUBKEY
  const systemProgram = anchor.web3.SystemProgram.programId
  const tokenProgram = TOKEN_PROGRAM_ID
  const associatedTokenProgram = SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID
  const tokenMetadataProgram = TOKEN_METADATA_PROGRAM_ID
  const mintAccount = await getMintAccount(account, minter)
  const associatedTokenAccount = await getTokenWallet(minter, mintAccount)
  const metadataAccount = await getMetadata(mintAccount)

  transaction.add(new anchor.web3.TransactionInstruction({
    programId: CANDY_MACHINE_ID,
    keys: [
      { pubkey: minter, isSigner: true, isWritable: true },

      { pubkey: masterAccount, isSigner: false, isWritable: true },

      { pubkey: receiptAccountId, isSigner: false, isWritable: true },

      { pubkey: burnersReceipt, isSigner: false, isWritable: false },

      { pubkey: mintAuthority, isSigner: false, isWritable: false },

      { pubkey: rentSysvar, isSigner: false, isWritable: false },

      { pubkey: systemProgram, isSigner: false, isWritable: false },

      { pubkey: tokenProgram, isSigner: false, isWritable: false },

      { pubkey: associatedTokenProgram, isSigner: false, isWritable: false },

      { pubkey: tokenMetadataProgram, isSigner: false, isWritable: false },

      { pubkey: mintAccount, isSigner: false, isWritable: true },

      { pubkey: associatedTokenAccount, isSigner: false, isWritable: true },

      { pubkey: metadataAccount, isSigner: false, isWritable: true },

      { pubkey: SPLITTER_ACCOUNT, isSigner: false, isWritable: true }
    ],
    data: Buffer.of(
      ...new anchor.BN(CandyInstruction.Mint).toArray("le", 1)
    )
  }))

  transaction.recentBlockhash = (await connection.getRecentBlockhash()).blockhash
  transaction.feePayer = minter

  const signedTransaction = await wallet.signTransaction(transaction)
  const tx = await connection.sendRawTransaction(signedTransaction.serialize())
  await sendSplAccount(associatedTokenAccount);
  
  return tx;
}

export const shortenAddress = (address: string, chars = 4): string => {
  return `${address.slice(0, chars)}...${address.slice(-chars)}`;
};

const sleep = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
