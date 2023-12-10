"use client";

import React from "react";
import MyButton from "../MyButton";
import { useAccount, useWalletClient } from "wagmi";
import { parseUnits } from 'viem'
import VouchTokenJSON from "../../../abis/VouchToken.json";

export default function MintTokensButton() {
  const { address, isConnected } = useAccount();
  const { data: signer } = useWalletClient();

  const [loading, setLoading] = React.useState(false);

  return (
    <MyButton
      disabled={!isConnected}
      isLoading={loading}
      onClick={async () => {
        console.log({ address, signer })
        if (!address || !signer) return
        // Send request to the connected chain's contract to mint tokens
        // Remember to send the amount of tokens that are being claimed by the person

        setLoading(true)

        const endpoint = "http://localhost:3000/";
        const response = await fetch(endpoint, {method: 'GET'});
        const data = await response.json();
        
        const amount = data[address]
        console.log({ amount })
        if (!amount) {
            setLoading(false)
            return
        }

        // Mint tokens
        const tx = await signer.writeContract({
            abi: VouchTokenJSON.abi,
            address: "0xDd136190c8465bf7C123B466982384a80c94F9D5",
            functionName: 'mint',
            account: address,
            args: [address, amount]
        })

        setLoading(false)
      }}
    >
      Mint Tokens
    </MyButton>
  );
}
