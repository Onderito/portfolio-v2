// components/GradientButton.tsx
import React from "react";

interface GradientButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "default" | "compact";
  showCursor?: boolean; // ← NOUVEAU
  enableHover?: boolean; // ← NOUVEAU
}

const GradientButton: React.FC<GradientButtonProps> = ({
  text,
  onClick,
  className = "",
  disabled = false,
  size = "md",
  showCursor = false,
  enableHover = false,
}) => {
  const sizeClasses = {
    sm: "px-12 py-2 text-lg",
    md: "px-12 py-2 text-xl",
    lg: "px-12 py-3 text-2xl",
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
          font-shantell
          font-bold
          ${sizeClasses[size]}
          rounded-xl
          bg-white
          ${enableHover ? "hover:bg-transparent hover:text-white" : ""}
          shadow-sm
          text-black/50
          transition-all
          duration-200
          whitespace-nowrap
          w-full
          ${showCursor ? "cursor-pointer" : ""}
          disabled:opacity-50
          disabled:cursor-not-allowed
        `}
      >
        {text}
      </button>
    </div>
  );
};

export default GradientButton;
