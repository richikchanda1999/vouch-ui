'use client'

import React from "react";
import { useAccount } from "wagmi";

const MyInput: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({
  className,
  ...rest
}) => {
  return (
    <input
      className={`border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      {...rest}
    />
  );
};

export default MyInput;
