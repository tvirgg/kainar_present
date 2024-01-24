import * as BufferLayout from "@solana/buffer-layout"
import { publickey, uint16, uint64, uint8, uint8array } from "./utils"

export const PixTapeMasterLayout = BufferLayout.struct([
    uint8("flags"),
    publickey("adminSplitterPubkey"),
    uint64("totalAmount"),
    uint64("mintedAmount"),
    uint16("maxMintPerSigner"),
    uint16("sellerFeeBasisPoints"),
    publickey("whitelistPubkey"),
    uint8array(12, "symbol"),
    uint8array(64, "uriPrefix"),
    uint64("price"),
    publickey("burnerId"),
    publickey("burnerState")
])
