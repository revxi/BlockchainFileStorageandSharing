import React from 'react';
import { Loader2 } from 'lucide-react';

/**
 * A reusable Button component with Snow & Slate styling.
 * * @param {string} variant - 'primary', 'secondary', 'ghost', or 'danger'
 * @param {string} size - 'sm', 'md', 'lg'
 * @param {boolean} isLoading - Shows a spinner and disables the button
 */
const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  isLoading = false, 
  className = '', 
  disabled,
  ...props 
}) => {
  
  // Base styles for all buttons
  const baseStyles = "inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100 rounded-xl";

  // Variant-specific styles
  const variants = {
    primary: "bg-indigo-600 text-white shadow-md shadow-indigo-100 hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-200",
    secondary: "bg-white text-slate-700 border border-slate-200 shadow-sm hover:bg-slate-50 hover:border-slate-300",
    ghost: "bg-transparent text-slate-600 hover:bg-slate-100 hover:text-slate-900",
    danger: "bg-rose-50 text-rose-600 border border-rose-100 hover:bg-rose-100 hover:text-rose-700"
  };

  // Size-specific styles
  const sizes = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-5 py-2.5 text-sm",
    lg: "px-8 py-3.5 text-base"
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={isLoading || disabled}
      {...props}
    >
      {isLoading ? (
        <>
          <Loader2 className="animate-spin" size={size === 'sm' ? 14 : 18} />
          {size !== 'sm' && <span>Processing...</span>}
        </>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;