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
          address: "0xDd136190c8465bf7C123B466982384a80c94F9D5",
          functionName: "addPlugin",
          account: address,
          args: ["0xA4ee420D730273028520EE02726b19162B754bb9"],
        });

        setLoading(false);
      }}
    >
      Enable Plugin
    </MyButton>
  );
}
