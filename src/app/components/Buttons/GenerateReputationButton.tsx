'use client'

import React from "react";
import MyButton from "../MyButton";

export default function GenerateReputationButton() {
  return (
    <MyButton
      onClick={async () => {
        // Send address to the rollup endpoint
      }}
    >
      Generate reputation
    </MyButton>
  );
}
