import React from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button
      style={{
        padding: "8px 16px",
        fontSize: "16px",
      }}
      onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
