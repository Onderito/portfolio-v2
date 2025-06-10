// components/GradientButton.tsx
import React from "react";

interface GradientButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "default" | "compact";
}

const GradientButton: React.FC<GradientButtonProps> = ({
  text,
  onClick,
  className = "",
  disabled = false,
  size = "md",
  variant = "default",
}) => {
  // Définir les tailles
  const sizeClasses = {
    sm: "px-12 py-2 text-lg",
    md: "px-12 py-2 text-xl",
    lg: "px-12 py-4 text-lg",
    xl: "px-12 py-5 text-xl",
  };

  return (
    <div
      className={`inline-block p-[1px] rounded-xl bg-gradient-to-r from-[#FFA585] to-[#FFEDA0] ${className}`}
    >
      <button
        onClick={onClick}
        disabled={disabled}
        className={`
          font-fredoka
          font-semibold
          ${sizeClasses[size]}
          rounded-xl
          bg-white
          shadow-sm
          text-black/50
          transition-all
          duration-200
          disabled:cursor-not-allowed
          whitespace-nowrap
        `}
      >
        {text}
      </button>
    </div>
  );
};

export default GradientButton;
