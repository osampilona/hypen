"use client";
import React from "react";
import linkButton from "@/components/Buttons/LinkButton/linkButton.module.scss";

export interface ILinkButtonProps {
  label: string;
  isPrimary?: boolean;
  color?: string;
  disabled?: boolean;
}

const LinkButton = ({
  label,
  isPrimary,
  color,
  disabled,
  ...props
}: ILinkButtonProps) => {
  const mode = isPrimary === true ? "button--primary" : "button--secondary";
  const unMode = disabled ? "button--disabled" : "";
  return (
    <>
      <button
        className={[
          linkButton.button,
          linkButton[mode],
          linkButton[unMode],
        ].join(" ")}
        data-testid="linkButton"
        style={{ color: color }}
        {...props}
      >
        {label}
      </button>
    </>
  );
};

export default LinkButton;
