import React from "react";

interface ButtonProps {
  title: string;
}

const Button = ({ title }: ButtonProps) => {
  const buttonType = () => {
    if (title === "Fale conosco") {
      return `w-52 bg-button`;
    }

    return ` bg-white text-primary font-bold`;
  };

  return (
    <button className={`${buttonType()} w-52 py-2 rounded-sm`}>{title}</button>
  );
};

export default Button;
