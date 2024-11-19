import React from "react";

interface ButtonProps {
  title: string;
}

const Button = ({ title }: ButtonProps) => {
  return <button className="w-52 py-2 ">{title}</button>;
};

export default Button;
