'use client'

import React from "react";
import MyButton from "../MyButton";

export default function VouchButton() {
  return (
    <MyButton
      onClick={async () => {
        // Call the _vouch function in the contract
      }}
    >
      Vouch
    </MyButton>
  );
}
