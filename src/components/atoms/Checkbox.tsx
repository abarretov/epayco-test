import React from 'react';

// ----------------------------------------------------------------------

type Props = React.InputHTMLAttributes<HTMLInputElement>;

// ----------------------------------------------------------------------

export const Checkbox = ({ className = '', ...props }: Props) => {
  return (
    <input
      type="checkbox"
      className={`w-5 h-5 rounded border-grey-300 text-primary focus:ring-primary/40 focus:ring-offset-0 cursor-pointer transition-colors duration-200 accent-primary ${className}`}
      {...props}
    />
  );
};
