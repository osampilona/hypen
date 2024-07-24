import React from "react";
import styles from "@/components/Forms/InputField/InputField.module.scss";

interface InputFieldProps {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  id: string;
  "aria-label": string;
  "aria-autocomplete": "list";
  "aria-controls": string;
  "aria-expanded": boolean;
  "aria-activedescendant"?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  leftIcon,
  rightIcon,
  placeholder,
  value,
  onChange,
  onKeyDown,
  id,
  "aria-label": ariaLabel,
  "aria-autocomplete": ariaAutocomplete,
  "aria-controls": ariaControls,
  "aria-expanded": ariaExpanded,
  "aria-activedescendant": ariaActivedescendant,
}) => (
  <div className={styles.inputContainer}>
    {leftIcon && <div className={styles.leftIcon}>{leftIcon}</div>}
    <input
      className={styles.input}
      type="text"
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
      id={id}
      aria-label={ariaLabel}
      aria-autocomplete={ariaAutocomplete}
      aria-controls={ariaControls}
      aria-activedescendant={ariaActivedescendant}
    />
    <button style={{ display: "contents" }}>
      {rightIcon && <div className={styles.rightIcon}>{rightIcon}</div>}
    </button>
  </div>
);

export default InputField;
