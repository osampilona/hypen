import React from "react";
import styles from "@/components/InputField/InputField.module.scss";

interface InputFieldProps {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  leftIcon,
  rightIcon,
  placeholder,
  value,
  onChange,
  onKeyDown,
}) => (
  <div className={styles.inputContainer}>
    {leftIcon && <span className={styles.leftIcon}>{leftIcon}</span>}
    <input
      className={styles.input}
      type="text"
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
    />
    {rightIcon && <span className={styles.rightIcon}>{rightIcon}</span>}
  </div>
);

export default InputField;
