'use client'

import React from "react";
import MyButton from "../MyButton";

export default function ViewReputationButton() {
  return (
    <MyButton
      onClick={async () => {
        // Fetch the reputation from the rollup state
      }}
    >
      View reputation
    </MyButton>
  );
}
