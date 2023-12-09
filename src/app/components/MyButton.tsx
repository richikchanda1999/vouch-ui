import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

const MyButton: React.FC<Props> = ({
  children,
  isLoading = false,
  disabled,
  className,
  ...props
}) => {
  const additionalClassNames = className ? ` ${className}` : "";
  const isDisabled = isLoading || disabled;
  const disabledStyles = isDisabled ? " opacity-50 cursor-not-allowed" : "";

  return (
    <button
      {...props}
      disabled={isDisabled}
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded${additionalClassNames}${disabledStyles}`}
    >
      {isLoading ? (
        <AiOutlineLoading3Quarters size={18} className="animate-spin" />
      ) : (
        children
      )}
    </button>
  );
};

export default MyButton;
