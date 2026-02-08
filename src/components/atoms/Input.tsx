import React from 'react';

// ----------------------------------------------------------------------

type Props = React.InputHTMLAttributes<HTMLInputElement>;

// ----------------------------------------------------------------------

export const Input = ({ className = '', ...props }: Props) => {
  return (
    <input
      className={`w-full px-4 py-3 rounded-lg bg-white border border-grey-300 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all duration-200 placeholder-grey-400 text-grey-800 text-sm font-medium ${className}`}
      {...props}
    />
  );
};
