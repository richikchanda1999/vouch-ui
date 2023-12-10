"use client";

import React from "react";
import MyButton from "../MyButton";
import { useAccount, useWalletClient } from "wagmi";
import * as ethers from "ethers";

export default function GenerateReputationButton() {
  const { address, isConnected } = useAccount();
  return (
    <MyButton
      disabled={!isConnected}
      onClick={async () => {
        if (!address) return;

        const provider = new ethers.providers.Web3Provider(
          (window as any).ethereum
        );
        const signer = provider.getSigner();

        // Send address to the rollup endpoint
        const endpoint = "http://localhost:3000/";

        const reputationRes = await fetch(endpoint + "getReputation", {
          method: "POST",
          body: JSON.stringify({ address }),
        });
        const reputationData = await reputationRes.json();

        const payload = {
          type: "calculate-reputation",
          address: address,
          reputation: parseInt(reputationData.reputation),
        };

        console.log(payload);

        const signature = await signer._signTypedData(
          {
            name: "Reputation Rollup",
            version: "1",
            chainId: 69420,
            verifyingContract: "0x6de5327a6a8fe9d7c97144950496709704b003f3",
            salt: "0x0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef",
          },
          {
            "calculate-reputation": [
              {
                name: "type",
                type: "string",
              },
              {
                name: "address",
                type: "address",
              },
              {
                name: "reputation",
                type: "uint256",
              },
            ],
          },
          payload
        );

        const body = JSON.stringify({
          msgSender: address,
          signature,
          payload,
        });

        const response = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body,
        });

        console.log(response.status);
        const data = await response.json();
        console.log(data);
      }}
    >
      Generate reputation
    </MyButton>
  );
}
