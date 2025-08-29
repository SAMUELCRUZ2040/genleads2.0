// components/SubtleButton.tsx
import React from 'react';

interface SubtleButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const SubtleButton: React.FC<SubtleButtonProps> = ({ 
  children, 
  onClick, 
  className = ""
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        inline-flex items-center gap-2 px-6 py-3 
        rounded-full text-sm font-medium text-gray-700
        bg-white/20 border-white/30
        transition-all duration-300 ease-out
        shadow-xl hover:scale-105
        shadow-purple-200/30
        max-lg:px-5 max-lg:py-2.5 max-lg:text-xs
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default SubtleButton;