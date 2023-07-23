import React from "react";
import ctaButton from "./ctaButton.module.scss";
import Image from "next/image";

export interface ICtaButtonProps {
  label: string;
  buttonType?: "primary" | "secondary";
  disabled?: boolean;
  backgroundColor?: string;
  size?: "text-button" | "micro" | "small" | "medium" | "large";
  icon?: any;
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
        {icon && (
          <Image src={icon} alt="search-icon" height={24} width={24}></Image>
        )}
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
