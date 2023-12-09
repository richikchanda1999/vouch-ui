'use client'

import React from "react";
import { useAccount } from "wagmi";

const MyInput: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({
  className,
  ...rest
}) => {
  const { isConnected, address } = useAccount();

  return (
    <input
      className={`border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      {...rest}
      disabled={isConnected}
      value={isConnected ? address : rest.value}
    />
  );
};

export default MyInput;
