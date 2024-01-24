import * as anchor from "@project-serum/anchor";
import axios from "axios";

export interface whilelistMember {
    member: string;
    reserve: number;
}

const apiUrl = process.env.REACT_APP_WHITELIST_URL!;
const secretKey = process.env.REACT_APP_SECRET_KEY!;

export async function fetchWhitelist(wallet: anchor.web3.PublicKey): Promise<whilelistMember | null> {
    const url = `${apiUrl}/whitelisted/member/${wallet.toBase58()}`;

    try {
        const result = await axios.get<whilelistMember>(url);
        return result.data;
    }
    catch (err) {
        return null;
    }
}

export async function descreaseWhitelist(member: whilelistMember): Promise<void> {
    const data = {
        reserve: member.reserve - 1
    };

    const url = `${apiUrl}/whitelisted/update/${member.member}/${secretKey}`;

    await axios.put(url, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}