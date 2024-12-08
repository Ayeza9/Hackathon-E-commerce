import React from 'react';

interface ButtonProps {
  text: string; // The button text
  classNames?: string; // Additional classes for styling (optional)
  onClick?: () => void; // Optional click handler
}

const Button: React.FC<ButtonProps> = ({ text, classNames = '', onClick }) => {
  return (
    <button
      className={`bg-black text-white py-2 px-6 rounded-md hover:bg-gray-800 transition duration-300 ease-in-out ${classNames}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
