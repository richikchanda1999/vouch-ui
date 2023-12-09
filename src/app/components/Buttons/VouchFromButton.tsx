'use client'

import React from "react";
import MyButton from "../MyButton";

export default function VouchFromButton() {
  return (
    <MyButton
      onClick={async () => {
        // Call the _vouchFrom function in the contract
      }}
    >
      Vouch From
    </MyButton>
  );
}
