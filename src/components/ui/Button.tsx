"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "md" | "lg";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  children: ReactNode;
};

const variantClass: Record<ButtonVariant, string> = {
  primary: "an-btn--primary",
  secondary: "an-btn--secondary",
  ghost: "an-btn--ghost",
};

const sizeClass: Record<ButtonSize, string> = {
  md: "an-btn--md",
  lg: "an-btn--lg",
};

export function Button({
  variant = "primary",
  size = "md",
  loading = false,
  disabled,
  className = "",
  children,
  type = "button",
  ...rest
}: ButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <button
      type={type}
      className={`an-btn ${variantClass[variant]} ${sizeClass[size]} ${className}`.trim()}
      disabled={isDisabled}
      aria-busy={loading || undefined}
      data-loading={loading ? "true" : undefined}
      {...rest}
    >
      <span className="an-btn__label">{loading ? "Sending…" : children}</span>
    </button>
  );
}
