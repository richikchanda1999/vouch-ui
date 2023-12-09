"use client";

import React from "react";
import MyButton from "../MyButton";
import { useAccount } from "wagmi";

export default function UnvouchButton() {
  const { isConnected } = useAccount();
  return (
    <MyButton
      disabled={!isConnected}
      onClick={async () => {
        // Call the _unvouch function in the contract
      }}
    >
      Unvouch
    </MyButton>
  );
}
