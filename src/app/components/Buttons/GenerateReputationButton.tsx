"use client";

import React from "react";
import MyButton from "../MyButton";
import { useAccount } from "wagmi";

export default function GenerateReputationButton() {
  const { isConnected } = useAccount();
  return (
    <MyButton
      disabled={!isConnected}
      onClick={async () => {
        // Send address to the rollup endpoint
      }}
    >
      Generate reputation
    </MyButton>
  );
}
