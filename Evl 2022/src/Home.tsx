import { useEffect, useState } from "react";
import styled from "styled-components";
import "./Home.css";
import { Button, CircularProgress, Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

import * as anchor from "@project-serum/anchor";

import { LAMPORTS_PER_SOL } from "@solana/web3.js";

import { AnchorWallet, useAnchorWallet } from "@solana/wallet-adapter-react";
import { WalletDialogButton } from "@solana/wallet-adapter-material-ui";

import {
  awaitTransactionSignatureConfirmation,
  getCandyMachineState,
  mintToken,
  shortenAddress,
  getReceiptAccountState,
  getBurnerReceiprAccountAddr,
  getBurnerReceipt,
} from "./candy-machine";
import { PixTapeState } from "./pixtape-state";
import { BurnerReceipt } from "./BurnerReceipt";
import { descreaseWhitelist, fetchWhitelist, whilelistMember } from "./whitelist_member";
import { getUtcAsync } from "./lib/time_api";

const ConnectButton = styled(WalletDialogButton)`background-color: rgba(161, 20, 20, 0.5) !important; border: 1px solid #FFFFFF !important; border-radius: 5px !important; :hover{background: rgba(161, 20, 20, 1) !important;}`;

const CounterText = styled.span``; // add your styles here

const MintContainer = styled.div``; // add your styles here

const MintButton = styled(Button)``; // add your styles here

export interface HomeProps {
  connection: anchor.web3.Connection;
  txTimeout: number;
  candyMachineState: anchor.web3.PublicKey;
}

const Home = (props: HomeProps) => {
  const [balance, setBalance] = useState<number>();
  const [isSoldOut, setIsSoldOut] = useState(false); // true when items remaining is zero
  const [isMinting, setIsMinting] = useState(false); // true when user got to press MINT

  const [whitelist, setWhitelist] = useState<whilelistMember | null>(null);

  const [whitelisted, setWhitelisted] = useState(false);

  useEffect(() => {
        const ok = whitelist !== null && whitelist.reserve > 0;
        setWhitelisted(ok);
      },
      [whitelist]);

  const [mintStarted, setMintStarted] = useState(false)
  const [mintFinished, setMintFinished] = useState(false)

  const [startedForBurners, setStartedForBurners] = useState(false)
  const [startedWhitelist, setStartedWhitelist] = useState(false)

  const [itemsAvailable, setItemsAvailable] = useState(0);
  const [itemsRedeemed, setItemsRedeemed] = useState(0);
  const [itemsRemaining, setItemsRemaining] = useState(0);
  const [remainingTokens, setRemainingTokens] = useState(-1);
  const [vipRedeemed, setVipRedeemed] = useState(0);
  const [nftPrice, setNftPrice] = useState(0);

  const [burnAccount, setBurnAccount] = useState<BurnerReceipt | null>(null);

  const [alertState, setAlertState] = useState<AlertState>({
    open: false,
    message: "",
    severity: undefined,
  });

  const wallet = useAnchorWallet();

  async function getMyWhitelist() {
    if (!wallet)
      return;

    const whitelist = await fetchWhitelist(wallet.publicKey);
    setWhitelist(_ => whitelist);
  }

  useEffect(() => {
        getMyWhitelist();
      },
      [wallet]);
  const [finalPrice, setFinalPrice] = useState(0);

  function calculatePrice() {
    if (burnAccount !== null && burnAccount.burnedTokens < vipRedeemed) {
      setFinalPrice(nftPrice * 0.26);
    } else if (whitelisted && !mintStarted) {
      setFinalPrice(nftPrice * 0.65);
    } else {
      setFinalPrice(nftPrice);
    }
  }

  useEffect(() => {
    calculatePrice();
  }, [nftPrice, whitelisted, burnAccount, vipRedeemed]);

  const refreshCandyMachineState = () => {
    (async () => {
      if (!wallet) return;

      const {
        isInitialized,
        isStartedForBurners,
        isStartedPresale,
        isStarted,
        isFinished,
        adminSplitterPubkey,
        totalAmount,
        mintedAmount,
        maxMintPerSigner,
        sellerFeeBasisPoints,
        whitelistPubkey,
        symbol,
        uriPrefix,
        price,
        burner_id,
        burner_state
      } = await getCandyMachineState(
          props.candyMachineState,
          props.connection
      );

      setNftPrice(_ => price.toNumber());

      const receiptAccount = await getReceiptAccountState(props.connection, wallet.publicKey)
      const burnerAddr = await getBurnerReceiprAccountAddr(wallet.publicKey);
      const burnerState = await getBurnerReceipt(props.connection, burnerAddr);
      setBurnAccount(_ => burnerState);

      if (receiptAccount != null) {
        setRemainingTokens(receiptAccount.remainingMintTokens.toNumber())
        const redeemed = receiptAccount.maxMintTokens.toNumber() - receiptAccount.remainingMintTokens.toNumber() + receiptAccount.vipMintTokens.toNumber();
        setItemsRedeemed(redeemed)
        setVipRedeemed(receiptAccount.vipMintTokens.toNumber())
      }

      const remaining = 5555 - mintedAmount.toNumber()

      console.log(isStartedForBurners);
      setStartedForBurners(isStartedForBurners)
      setStartedWhitelist(isStartedPresale);
      setMintStarted(isStarted)
      setMintFinished(isFinished)
      setItemsAvailable(totalAmount.toNumber());
      setItemsRemaining(remaining);
      setIsSoldOut(remaining === 0);
    })();
  };

  const onMint = async () => {

    if (itemsRemaining < 500) {
      const { mintedAmount } = await getCandyMachineState(
          props.candyMachineState,
          props.connection
      );

      const remaining = 5555 - mintedAmount.toNumber();
      setItemsRemaining(_ => remaining)
      setIsSoldOut(_ => remaining === 0)

      if (remaining <= 0) {
        setAlertState({
          open: true,
          message: "SOLD OUT!",
          severity: "info"
        })
        return;
      }
    }

    const canMint = (mintStarted || whitelisted && startedWhitelist || startedForBurners && burnAccount !== null) && !mintFinished;
    const canWhitelistMint = whitelisted;
    const whitelistEnded = true;

    if (!(canMint && whitelistEnded || canWhitelistMint)) {
      setAlertState({
        open: true,
        message: "You are not in whitelist",
        severity: "info"
      })
      return;
    }

    try {
      setIsMinting(true);
      if (wallet) {
        const mintTxId = await mintToken(
            props.connection,
            wallet
        )

        const status = await awaitTransactionSignatureConfirmation(
            mintTxId,
            props.txTimeout,
            props.connection,
            "singleGossip",
            false
        );

        if (!status?.err) {

          if (whitelist !== null) {
            if (burnAccount === null || burnAccount.burnedTokens / 3 <= vipRedeemed) {
              await descreaseWhitelist(whitelist);
            }
          }

          setAlertState({
            open: true,
            message: "Congratulations! Mint succeeded!",
            severity: "success",
          });
        } else {
          setAlertState({
            open: true,
            message: "Mint failed! Please try again!",
            severity: "error",
          });
        }
      }
    } catch (error: any) {
      // TODO: blech:
      console.log(error)

      // setAlertState({
      //   open: true,
      //   error,
      //   severity: "error",
      // });
    } finally {
      if (wallet) {
        const balance = await props.connection.getBalance(wallet.publicKey);
        setBalance(balance / LAMPORTS_PER_SOL);
      }
      setIsMinting(false);
      refreshCandyMachineState();
    }
  };

  useEffect(() => {
    (async () => {
      if (wallet) {
        const balance = await props.connection.getBalance(wallet.publicKey);
        setBalance(balance / LAMPORTS_PER_SOL);
      }
    })();
  }, [wallet, props.connection]);

  useEffect(refreshCandyMachineState, [
    wallet,
    props.connection,
  ]);
  useEffect(() => {
    // @ts-ignore
    if (document.getElementById("plane_block_line")){
      let ror = ((5555 - itemsRemaining)/1111) *100;
      console.log(ror);
      // @ts-ignore
      document.getElementById("plane_block_line").style = `width: ${ror}%`;
    }
  }, [itemsRemaining]);
  return (
      <div className="wrap">
        <main>
          {/*/
          {wallet && (
              <p>Wallet {shortenAddress(wallet.publicKey.toBase58() || "")}</p>
          )}
              {nftPrice > 0 && <p>NFT price without burner and whitelist discounts is {nftPrice / 1000000000}</p>}
        /*/}
          <MintContainer>
            {!wallet ? (
                <div className="connect_but">
                  <ConnectButton>CONNECT WALLET</ConnectButton>
                </div>
            ) : (
                <div className="wrap_into_block">
                  <h1>
                    KNIGHTDOM: EVOLVED MINT
                  </h1>
                  <div className="wrap_into">
                    {
                      /*/
                    {(!whitelisted) && <p>You are not in common whitelist</p>}
                    {(whitelisted) && <p>You are in common whitelist</p>}
                    {(whitelisted && mintStarted) && <p>You are in whitelist, but whitelist time ends</p>}
                      Price for you: {finalPrice/1000000000}
                        <p>
                      Price: {finalPrice/1000000000}
                    </p>
                      /*/
                    }
                    <p className="w_bal">
                      Wallet balance: {(balance || 0).toLocaleString()}SOL
                    </p>
                    <div className="plane_block">
                      <div className="plane_block_line" id="plane_block_line">
                        {wallet && itemsRemaining && <p>{5555 - itemsRemaining}/1111</p>}
                      </div>
                    </div>
                  </div>
                  <div className="MINT_btn">
                    <MintButton
                        disabled={!((mintStarted || whitelisted && startedWhitelist || startedForBurners && burnAccount !== null) && !mintFinished) || mintFinished || isSoldOut || isMinting || (remainingTokens === 0)}
                        onClick={onMint}
                        variant="contained"
                    >
                      {isSoldOut ? (
                          "SOLD OUT"
                      ) : (
                          remainingTokens != 0 ? (
                              isMinting ? (
                                  <CircularProgress />
                              ) : (
                                  "MINT"
                              )
                          ) : (
                              "MINT LIMIT EXCEEDED"
                          )
                      )}
                    </MintButton>

                  </div>
                </div>
            )}
          </MintContainer>

          <Snackbar
              open={alertState.open}
              autoHideDuration={6000}
              onClose={() => setAlertState({ ...alertState, open: false })}
          >
            <Alert
                onClose={() => setAlertState({ ...alertState, open: false })}
                severity={alertState.severity}
            >
              {alertState.message}
            </Alert>
          </Snackbar>
        </main>
      </div>
  );
};

interface AlertState {
  open: boolean;
  message: string;
  severity: "success" | "info" | "warning" | "error" | undefined;
}

const renderCounter = ({ days, hours, minutes, seconds, completed }: any) => {
  return (
      <CounterText>
        {hours + (days || 0) * 24} hours, {minutes} minutes, {seconds} seconds
      </CounterText>
  );
};

export default Home;
