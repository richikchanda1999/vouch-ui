"use client";

import React from "react";
import AuthButton from "./components/Buttons/AuthButton";
import MyInput from "./components/MyInput";
import GenerateReputationButton from "./components/Buttons/GenerateReputationButton";
import ViewReputationButton from "./components/Buttons/ViewReputationButton";
import MintTokensButton from "./components/Buttons/MintTokensButton";
import VouchButton from "./components/Buttons/VouchButton";
import VouchFromButton from "./components/Buttons/VouchFromButton";
import EnablePluginButton from "./components/Buttons/EnablePluginButton";
import { useAccount } from "wagmi";
import Image from "next/image";

export default function Home() {
  const [address, setAddress] = React.useState("");

  const [fromAddress, setFromAddress] = React.useState("");
  const [toAddress, setToAddress] = React.useState("");
  const [amount, setAmount] = React.useState(0);

  const { address: walletAddress, isConnected } = useAccount();

  return (
    <main className="flex flex-col items-center justify-center w-full h-screen flex-1 p-20 text-center bg-[#E1D5C8]">
      <div className="flex w-full h-full items-center gap-8">
        <div className="relative w-1/3 h-1/2">
          <Image alt="Logo" src='/logo.png' fill/>
        </div>
        <div className="flex flex-col flex-grow items-center">
          <div className="flex flex-row items-end w-full gap-4">
            <div className="flex flex-col w-full gap-4">
              <MyInput
                type="text"
                placeholder="Enter address or connect wallet"
                className="flex-grow"
                disabled={isConnected}
                value={isConnected ? walletAddress : address}
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
              <MyInput
                type="text"
                placeholder="Enter address (only for vouchFrom)"
                className="flex-grow"
                value={fromAddress}
                onChange={(e) => {
                  setFromAddress(e.target.value);
                }}
              />
              <MyInput
                type="text"
                placeholder="Enter to address (for vouch and vouchFrom)"
                className="flex-grow"
                value={toAddress}
                onChange={(e) => {
                  setToAddress(e.target.value);
                }}
              />
              <MyInput
                type="number"
                placeholder="Enter vouch amount"
                className="flex-grow"
                value={amount}
                onChange={(e) => {
                  setAmount(parseInt(e.target.value));
                }}
              />
            </div>

            <AuthButton />
          </div>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <GenerateReputationButton />
            <ViewReputationButton address={fromAddress} />
            <MintTokensButton />
            <EnablePluginButton />
            <VouchButton toAddress={toAddress} amount={amount} />
            <VouchFromButton
              fromAddress={fromAddress}
              toAddress={toAddress}
              amount={amount}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
