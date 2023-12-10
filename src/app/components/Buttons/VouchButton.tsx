"use client";

import React from "react";
import MyButton from "../MyButton";
import { useAccount, useWalletClient } from "wagmi";
import ReputationPluginJSON from "../../../abis/ReputationPlugin.json";
import { parseUnits } from "viem";

interface Props {
    toAddress: string;
    amount: number;
}

export default function VouchButton({ toAddress, amount }: Props) {
    const { address, isConnected } = useAccount();
    const { data: signer } = useWalletClient();
  
    const [loading, setLoading] = React.useState(false);
  
  return (
    <MyButton
      disabled={!isConnected}
      isLoading={loading}
      onClick={async () => {
        if (!signer) return;

        setLoading(true);

        console.log(parseUnits(amount.toString(), 18))
        
        // Call the _vouch function in the contract
        const tx = await signer.writeContract({
          abi: ReputationPluginJSON.abi,
          address: "0xA4ee420D730273028520EE02726b19162B754bb9",
          functionName: "vouch",
          account: address,
          args: [toAddress, amount],
        });

        setLoading(false);
      }}
    >
      Vouch
    </MyButton>
  );
}
