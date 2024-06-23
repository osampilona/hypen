import customInputField from "@/components/CustomInputField/customInputField.module.scss";
import { useState } from "react";

interface CustomInputFieldProps {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  placeholder?: string;
}

const CustomInputField: React.FC<CustomInputFieldProps> = ({
  rightIcon,
  leftIcon,
  placeholder,
}) => {
  return (
    <div className={customInputField.container}>
      {leftIcon && (
        <span className={customInputField.leftIcon}>{leftIcon}</span>
      )}
      <input
        data-testid="customInputField"
        className={customInputField.input}
        type="text"
        placeholder={placeholder || "Type here..."}
      />
      {rightIcon && (
        <span className={customInputField.rightIcon}>{rightIcon}</span>
      )}
    </div>
  );
};

export default CustomInputField;
