import * as BufferLayout from "@solana/buffer-layout"

export const uint8 = (property = "uint8"): any => {
    return BufferLayout.blob(1, property)
}

export const uint8array = (length: number, property = "u8arr"): any => {
    return BufferLayout.blob(length, property)
}

export const uint16 = (property = "uint16"): any => {
    return BufferLayout.blob(2, property)
}

export const uint64 = (property = "uint64"): any => {
    return BufferLayout.blob(8, property)
}

export const publickey = (property = "publickey"): any => {
    return BufferLayout.blob(32, property)
}