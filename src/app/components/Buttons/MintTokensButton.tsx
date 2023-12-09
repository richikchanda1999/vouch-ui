"use client";

import React from "react";
import MyButton from "../MyButton";
import { useAccount } from "wagmi";

export default function MintTokensButton() {
  const { isConnected } = useAccount();
  return (
    <MyButton
      disabled={!isConnected}
      onClick={async () => {
        // Send request to the connected chain's contract to mint tokens
        // Remember to send the amount of tokens that are being claimed by the person
      }}
    >
      Mint Tokens
    </MyButton>
  );
}
