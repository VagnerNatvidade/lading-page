import React from "react";

interface ButtonProps {
  title: string;
}

const Button = ({ title }: ButtonProps) => {
  return (
    <button
      className={`w-52 py-2 rounded-sm bg-green-500 hover:bg-green-400 transition-all`}
    >
      {title}
    </button>
  );
};

export default Button;
