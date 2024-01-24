import { PublicKey } from "@solana/web3.js";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL!;

enum resultType {
    Ok = 0,
    Error = 1
}

interface response {
    result: resultType
}

export async function sendSplAccount(splAddr: PublicKey): Promise<void> {
    try {
        const addrStr = splAddr.toBase58();
        const response = await axios.post<response>(`${API_URL}/registerMint?tokenAccount=${addrStr}`)

        if (response.data.result !== resultType.Ok) {
            throw new Error();
        }

    } catch (err) {
        console.error(err);
    }
}
