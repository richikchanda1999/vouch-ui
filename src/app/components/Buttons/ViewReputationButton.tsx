'use client'

import React from "react";
import MyButton from "../MyButton";

interface Props {
    address: string;
}

export default function ViewReputationButton({ address }: Props) {
  return (
    <MyButton
      onClick={async () => {
        // Fetch the reputation from the rollup state
        const endpoint = "http://localhost:3000/";
        const response = await fetch(endpoint, {method: 'GET'});
        const data = await response.json();
        
        console.log(data[address] ?? 0)
      }}
    >
      View reputation
    </MyButton>
  );
}
