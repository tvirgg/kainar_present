import * as BufferLayout from "@solana/buffer-layout"
import { uint8, publickey, uint16 } from "./utils";

export const ReceiptAccountStateLayout = BufferLayout.struct([
    uint8("isInitialized"),
    publickey("owner"),
    uint16("maxMintTokens"),
    uint16("remainingMintTokens"),
    publickey("pad"),
    uint16("vipMintTokens")
])
