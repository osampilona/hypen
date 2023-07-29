"use client";
import React from "react";
import ctaButton from "./ctaButton.module.scss";
import Image from "next/image";
import Search from "@/icons/Search";

export interface ICtaButtonProps {
  label: string;
  buttonType?: "primary" | "secondary";
  disabled?: boolean;
  backgroundColor?: string;
  size?: "micro" | "small" | "medium" | "large";
  icon?: React.ReactNode;
  onClick?: () => void;
}

const CtaButton = ({
  label,
  buttonType = "primary",
  disabled = false,
  backgroundColor,
  size = "medium",
  icon,
  ...props
}: ICtaButtonProps) => {
  const mode =
    buttonType === "primary" ? "button--primary" : "button--secondary";
  const unMode = disabled ? "button--disabled" : "";

  return (
    <>
      <button
        type="button"
        className={[
          ctaButton.button,
          ctaButton[`button--${size}`],
          ctaButton[mode],
          ctaButton[unMode],
        ].join(" ")}
        {...props}
      >
        {icon && <Search />}
        {label}
      </button>
      <style jsx>{`
        button {
          background-color: ${backgroundColor};
        }
      `}</style>
    </>
  );
};

export default CtaButton;
