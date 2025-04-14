import React from "react";

interface buttonProps {
  children: React.ReactNode;
}
const Button: React.FC<buttonProps> = ({ children }) => {
  return (
    <button className="text-lg cursor-pointer lg:text-xl text-slate-900 border border-slate-900 hover:bg-black  hover:text-slate-50 px-5 py-2 transition-all duration-300">
      {children}
    </button>
  );
};

export default Button;
