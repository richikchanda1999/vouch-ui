import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai"

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    isLoading?: boolean;
}

const MyButton: React.FC<Props> = ({ onClick, children, isLoading = false }) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      {isLoading ? <AiOutlineLoading3Quarters size={18} className='animate-spin' /> : children}
    </button>
  );
};

export default MyButton;
