import React from "react";
import styles from "./customInputField.module.scss";
import InputField from "@/components/Forms/InputField/InputField";

interface CustomInputFieldProps {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  placeholder?: string;
  categoryName: string;
  value: string;
  onChange: (value: string) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const CustomInputField: React.FC<CustomInputFieldProps> = ({
  leftIcon,
  rightIcon,
  placeholder = "Type here...",
  categoryName,
  value,
  onChange,
  onKeyDown = () => {}, // Provide a default empty function
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const inputId = `${categoryName.toLowerCase().replace(/\s+/g, "-")}-input`;

  return (
    <div className={styles.container} data-testid="customInputField">
      <h4 className={styles.title} id={`${inputId}-label`}>
        {categoryName}
      </h4>
      <InputField
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        placeholder={placeholder}
        value={value}
        onChange={handleInputChange}
        onKeyDown={onKeyDown}
        id={inputId}
        aria-label={categoryName}
        aria-autocomplete="list"
        aria-controls={`${inputId}-listbox`}
        aria-expanded={false}
      />
    </div>
  );
};

export default CustomInputField;
