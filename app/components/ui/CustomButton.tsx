'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CustomButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onAnimationStart' | 'onAnimationEnd' | 'onDragStart' | 'onDrag' | 'onDragEnd'> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const CustomButton = React.forwardRef<HTMLButtonElement, CustomButtonProps>(
  ({ children, className, variant = 'primary', size = 'md', onClick, ...props }, ref) => {
    const baseClasses = 'relative overflow-hidden rounded-lg border transition-all duration-300 ease-out';
    
    const variants = {
      primary: 'bg-primary text-primary-foreground border-primary hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25',
      secondary: 'bg-secondary text-secondary-foreground border-border hover:bg-secondary/80 hover:shadow-md'
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg'
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ 
          scale: 1.02,
          y: -2,
        }}
        whileTap={{ 
          scale: 0.98,
          y: 0,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25
        }}
        className={cn(
          baseClasses,
          variants[variant],
          sizes[size],
          'group font-medium flex items-center justify-center gap-2',
          className
        )}
        onClick={onClick}
        {...props}
      >
        {/* Background shine effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
        
        {/* Content */}
        <span className="relative z-10 flex items-center gap-2 transition-transform duration-200 group-hover:scale-105">
          {children}
        </span>
      </motion.button>
    );
  }
);

CustomButton.displayName = 'CustomButton';

export default CustomButton;