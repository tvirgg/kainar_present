import * as BufferLayout from "@solana/buffer-layout";
import { publickey, uint8 } from "./utils";

export const BurnerReceiptLayout = BufferLayout.struct([
    uint8("isInitialized"),
    publickey("owner"),
    uint8("burnedTokens")
]);
