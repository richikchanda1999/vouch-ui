"use client";

import React, { useEffect } from "react";
import MyButton from "../MyButton";
import { useAccount, useConnect } from "wagmi";
import { connect, disconnect } from "@wagmi/core";

export default function AuthButton() {
  const { isConnected, isConnecting, isReconnecting } = useAccount();
  const { connectors } = useConnect();

  useEffect(() => {
    console.log({ isConnected, isConnecting, isReconnecting, connectors })
  }, [isConnected, isConnecting, isReconnecting, connectors])

  if (isConnected) {
    return (
      <MyButton
        onClick={async () => {
          await disconnect();
        }}
      >
        Disconnect
      </MyButton>
    );
  } else {
    return (
      <MyButton
        isLoading={isConnecting || isReconnecting}
        onClick={async () => {
          console.log(connectors);
          const res = await connect({ connector: connectors[0] });
          console.log(res);
        }}
      >
        Connect Wallet
      </MyButton>
    );
  }
}
