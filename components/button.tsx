
"use client";

import type { ReactNode } from "react";

type ButtonVariant = "default";

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  fullWidth?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

const variants: Record<ButtonVariant, string> = {
  default:
    "bg-linear-to-r from-[#C084FC] via-[#7C4EEE] to-[#4F46E5] text-white",
};

export default function Button({
  children,
  variant = "default",
  fullWidth = false,
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${fullWidth ? "w-full" : "w-fit"}
        inline-flex items-center justify-center gap-5
        rounded-xl px-8 py-3
        font-button font-medium
        text-sm min-[700px]:text-base lg:text-lg
        transition-transform duration-200 ease-out
        hover:scale-105 active:scale-95
        disabled:hover:scale-100 disabled:active:scale-100
        ${variants[variant]}
      `}
    >
      {children}
    </button>
  );
}