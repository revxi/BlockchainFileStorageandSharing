import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const variants = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    ghost: 'hover:bg-slate-100 text-slate-600 px-3 py-2 rounded-lg transition-colors',
    danger: 'bg-red-50 text-red-600 border border-red-100 hover:bg-red-100 px-4 py-2 rounded-lg'
  };

  return (
    <button 
      className={`${variants[variant]} ${className} flex items-center justify-center gap-2`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;