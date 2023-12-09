'use client'

import React from "react";
import MyButton from "../MyButton";

export default function UnvouchButton() {
  return (
    <MyButton
      onClick={async () => {
        // Call the _unvouch function in the contract
      }}
    >
      Unvouch
    </MyButton>
  );
}
