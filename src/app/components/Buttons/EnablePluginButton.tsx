"use client";

import React from "react";
import MyButton from "../MyButton";
import { useAccount, useWalletClient } from "wagmi";
import VouchTokenJSON from "../../../abis/VouchToken.json";

export default function EnablePluginButton() {
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
        
        // Enable the plugin on the token contract
        const tx = await signer.writeContract({
          abi: VouchTokenJSON.abi,
          address: "0xB128D44532333d2973F368Acc813de22F84a0140",
          functionName: "addPlugin",
          account: address,
          args: ["0xfB437cba91Fe06f4B37e0f97Cb22ED53358Dc354"],
        });

        setLoading(false);
      }}
    >
      Enable Plugin
    </MyButton>
  );
}
