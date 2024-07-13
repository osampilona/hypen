"use client";
import React from "react";
import styles from "@/components/Buttons/CTAButton/ctaButton.module.scss";
import { GoSearch } from "react-icons/go";

export interface ICtaButtonProps {
  label: string;
  isPrimary?: boolean;
  disabled?: boolean;
  outlined?: boolean;
  size?: "micro" | "small" | "medium" | "large";
  icon?: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
  onMouseDown?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseEnter?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

const CtaButton = ({
  label,
  isPrimary = true,
  disabled = false,
  size = "medium",
  outlined = false,
  icon,
  isActive = false,
  className,
  onMouseDown,
  onMouseEnter,
  ...props
}: ICtaButtonProps) => {
  const modeClass = isPrimary ? "button--primary" : "button--secondary";
  const simpleClass = outlined ? "button--simple" : "";
  const disabledClass = disabled ? "button--disabled" : "";
  const activeClass = isActive ? "active" : "";

  return (
    <button
      type="button"
      className={[
        styles.button,
        styles[`button--${size}`],
        styles[modeClass],
        styles[simpleClass],
        styles[disabledClass],
        styles[activeClass],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      data-testid="CtaButton"
      disabled={disabled}
      onMouseDown={onMouseDown}
      onMouseEnter={onMouseEnter}
      {...props}
    >
      {icon && <GoSearch />}
      {label}
    </button>
  );
};

export default CtaButton;
