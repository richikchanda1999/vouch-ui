"use client";

import React from "react";
import MyButton from "../MyButton";
import { useAccount, useWalletClient } from "wagmi";
import ReputationPluginJSON from "../../../abis/ReputationPlugin.json";
import { parseUnits } from "viem";

interface Props {
    fromAddress: string;
    toAddress: string;
    amount: number;
}

export default function VouchButton({ fromAddress, toAddress, amount }: Props) {
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
        
        // Call the _vouch function in the contract
        const tx = await signer.writeContract({
          abi: ReputationPluginJSON.abi,
          address: "0xfB437cba91Fe06f4B37e0f97Cb22ED53358Dc354",
          functionName: "vouchFrom",
          account: address,
          args: [fromAddress, toAddress, parseUnits(amount.toString(), 18)],
        });

        setLoading(false);
      }}
    >
      Vouch From
    </MyButton>
  );
}
