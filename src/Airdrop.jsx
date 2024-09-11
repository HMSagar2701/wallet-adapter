import { useConnection, useWallet } from "@solana/wallet-adapter-react";

export function Airdrop() {
    const { connection } = useConnection(); // Destructure the connection object
    const wallet = useWallet();

    async function sendAirdropToUser() {
                const amount = document.getElementById("publickey").value;
                await connection.requestAirdrop(wallet.publicKey, 
                    amount*1000000000);
                alert("Airdroped sol");
    }

    return (
        <div>
            <input id="publickey" type="text" placeholder="Amount" />
            <button onClick={sendAirdropToUser}>Send Airdrop</button>
        </div>
    );
}
