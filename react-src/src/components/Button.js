import React from "react";

export const Button = ({ children, onClick, type }) => {
  return (
    <button className="btn btn--outline" onClick={onClick}>
      {children}
    </button>
  );
};
