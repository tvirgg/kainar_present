import { UTF8 } from "@solana/buffer-layout";
import { PublicKey } from "@solana/web3.js";
import BN from "bn.js";
import { PixTapeMasterLayout } from "./pixtape-state-layout";

export interface PixTapeState {
    isInitialized: boolean,
    isStartedForBurners: boolean,
    isStartedPresale: boolean,
    isStarted: boolean,
    isFinished: boolean,
    adminSplitterPubkey: PublicKey,
    totalAmount: BN,
    mintedAmount: BN,
    maxMintPerSigner: number,
    sellerFeeBasisPoints: number,
    whitelistPubkey: PublicKey,
    symbol: string,
    uriPrefix: string,
    price: BN,
    burner_id: PublicKey,
    burner_state: PublicKey
}

export function decodePixTapeState (data: Buffer): PixTapeState {
    const decoded = PixTapeMasterLayout.decode(data)
    const flags = new BN(decoded.flags).toNumber()
    return {
        isInitialized: (flags >> 0 & 0b1) != 0,
        isStartedForBurners: (flags >> 1 & 0b1) != 0,
        isStartedPresale: (flags >> 2 & 0b1) != 0,
        isStarted: (flags >> 3 & 0b1) != 0,
        isFinished: (flags >> 4 & 0b1) != 0,
        adminSplitterPubkey: new PublicKey(decoded.adminSplitterPubkey),
        totalAmount: new BN(decoded.totalAmount, "le"),
        mintedAmount: new BN(decoded.mintedAmount, "le"),
        maxMintPerSigner: new BN(decoded.maxMintPerSigner, "le").toNumber(),
        sellerFeeBasisPoints: new BN(decoded.sellerFeeBasisPoints, "le").toNumber(),
        whitelistPubkey: new PublicKey(decoded.whitelistPubkey),
        symbol: new UTF8().decode(decoded.symbol),
        uriPrefix: new UTF8().decode(decoded.uriPrefix),
        price: new BN(decoded.price, 'le'),
        burner_id: new PublicKey(decoded.burnerId),
        burner_state: new PublicKey(decoded.burnerState)
    }
}
