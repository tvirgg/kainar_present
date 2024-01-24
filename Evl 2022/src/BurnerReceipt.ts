import * as anchor from "@project-serum/anchor";
import BN from "bn.js";
import { BurnerReceiptLayout } from "./BurnerReceiptLayout";

export interface BurnerReceipt {
    isInitialized: boolean;
    owner: anchor.web3.PublicKey;
    burnedTokens: number;
}

export function decodeBurnerReceipt(data: Buffer): BurnerReceipt {
    const decoded = BurnerReceiptLayout.decode(data) as any;

    return {
        isInitialized: decoded.isInitialized != 0,
        owner: new anchor.web3.PublicKey(decoded.owner),
        burnedTokens: new BN(decoded.burnedTokens, "le").toNumber(),
    };
}
