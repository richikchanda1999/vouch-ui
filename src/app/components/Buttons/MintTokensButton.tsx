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
            address: "0xB128D44532333d2973F368Acc813de22F84a0140",
            functionName: 'mint',
            account: address,
            args: [address, parseUnits(amount.toString(), 18)]
        })

        setLoading(false)
      }}
    >
      Mint Tokens
    </MyButton>
  );
}
