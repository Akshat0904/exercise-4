import React, { ReactNode } from "react";

interface IProps {
  type?: "button" | "reset" | "submit";
  buttonClass?: string;
  children: ReactNode;
  onClick?: () => void;
}

const Button = ({
  type = "button",
  buttonClass,
  children,
  onClick,
}: IProps): JSX.Element => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={
        "px-4 py-2  disabled:opacity-50 disabled:pointer-events-none rounded-lg flex items-center justify-center " +
        buttonClass
      }
    >
      {children}
    </button>
  );
};

export default Button;
