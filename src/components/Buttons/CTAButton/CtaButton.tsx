"use client";
import React from "react";
import styles from "@/components/Buttons/CTAButton/ctaButton.module.scss";
import { GoSearch } from "react-icons/go";

export interface ICtaButtonProps {
  label: string;
  isPrimary?: boolean;
  disabled?: boolean;
  size?: "micro" | "small" | "medium" | "large";
  icon?: React.ReactNode;
  onClick?: () => void;
}

const CtaButton = ({
  label,
  isPrimary = true,
  disabled = false,
  size = "medium",
  icon,
  ...props
}: ICtaButtonProps) => {
  const modeClass = isPrimary ? "button--primary" : "button--secondary";
  const disabledClass = disabled ? "button--disabled" : "";

  return (
    <button
      type="button"
      className={[
        styles.button,
        styles[`button--${size}`],
        styles[modeClass],
        styles[disabledClass],
      ]
        .filter(Boolean)
        .join(" ")}
      data-testid="CtaButton"
      disabled={disabled}
      {...props}
    >
      {icon && <GoSearch />}
      {label}
    </button>
  );
};

export default CtaButton;
