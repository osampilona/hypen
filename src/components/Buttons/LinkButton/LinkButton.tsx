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
        {...props}
      >
        {label}
      </button>
      <style jsx>{`
        button {
          color: ${color};
        }
      `}</style>
    </>
  );
};

export default LinkButton;
