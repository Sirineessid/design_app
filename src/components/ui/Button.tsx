// Button.tsx
import React from 'react';
import { cva } from "class-variance-authority";

export type ButtonProps = {
  // Optional text label for the button.
  label?: string;
  // Function to be called when the button is clicked.
  onClick?: () => void;
  // Optional extra CSS classes.
  className?: string;
  // Button variant for styling purposes.
  variant?: 'primary' | 'secondary' | 'destructive';
  // Any children passed into the button (e.g., an icon).
  children?: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  className = '',
  variant = 'primary',
  children,
}) => {
  // Base classes for every button.
  const baseClasses =
    'px-4 py-2 rounded focus:outline-none transition-colors duration-200 ';

  // Set variant-specific classes.
  let variantClasses = '';
  switch (variant) {
    case 'primary':
      variantClasses = 'bg-blue-500 text-white hover:bg-blue-600';
      break;
    case 'secondary':
      variantClasses = 'bg-gray-500 text-white hover:bg-gray-600';
      break;
    case 'destructive':
      variantClasses = 'bg-red-500 text-white hover:bg-red-600';
      break;
    default:
      variantClasses = 'bg-blue-500 text-white hover:bg-blue-600';
  }

  // Combine all classes.
  const combinedClasses = `${baseClasses} ${variantClasses} ${className}`;

  return (
    <button onClick={onClick} className={combinedClasses}>
      {children || label}
    </button>
  );
};

export default Button;
