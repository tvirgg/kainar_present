import * as anchor from "@project-serum/anchor";
import { ReceiptAccountStateLayout } from "./receipt-account-state-layout";

export interface ReceiptAccountState {
    isInitialized: boolean,
    owner: anchor.web3.PublicKey,
    maxMintTokens: anchor.BN,
    remainingMintTokens: anchor.BN,
    pad: anchor.web3.PublicKey,
    vipMintTokens: anchor.BN
}

export function decodeReceiptState(data: Buffer): ReceiptAccountState {
    const decoded = ReceiptAccountStateLayout.decode(data)
    return {
        isInitialized: decoded.isInitialized != 0,
        owner: new anchor.web3.PublicKey(decoded.owner),
        maxMintTokens: new anchor.BN(decoded.maxMintTokens, "le"),
        remainingMintTokens: new anchor.BN(decoded.remainingMintTokens, "le"),
        pad: new anchor.web3.PublicKey(decoded.pad),
        vipMintTokens: new anchor.BN(decoded.vipMintTokens, 'le')
    }
}
