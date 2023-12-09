"use client";

import React from "react";
import MyButton from "../MyButton";
import { useAccount } from "wagmi";

export default function VouchButton() {
  const { isConnected } = useAccount();
  return (
    <MyButton
      disabled={!isConnected}
      onClick={async () => {
        // Call the _vouch function in the contract
      }}
    >
      Vouch
    </MyButton>
  );
}
