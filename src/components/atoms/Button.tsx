import React from 'react';

// ----------------------------------------------------------------------

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'danger' | 'icon';
}

// ----------------------------------------------------------------------

export const Button = ({ variant = 'primary', className = '', children, ...props }: Props) => {
  const baseStyles = "inline-flex items-center justify-center rounded-lg font-bold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm cursor-pointer";

  const variants = {
    primary: "bg-primary text-white hover:bg-primary-hover focus:ring-primary border border-transparent",
    secondary: "bg-white text-grey-800 hover:bg-grey-200 border border-grey-300 focus:ring-grey-500",
    danger: "bg-red-50 text-red-600 hover:bg-red-100 focus:ring-red-500 border border-transparent",
    icon: "p-2.5 rounded-md",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
