"use client";

import React from "react";
import MyButton from "../MyButton";
import { useAccount } from "wagmi";

export default function VouchFromButton() {
  const { isConnected } = useAccount();
  return (
    <MyButton
      disabled={!isConnected}
      onClick={async () => {
        // Call the _vouchFrom function in the contract
      }}
    >
      Vouch From
    </MyButton>
  );
}
