import React from "react";
import "./Button.scss";

const Button = ({ children, border, color }) => {
  return (
    <button
      className={`btn button text-light rounded${
        border ? "-pill" : ""
      } ${color}`}
    >
      {children}
    </button>
  );
};

export default Button;
