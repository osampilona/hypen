import customInputField from "@/components/CustomInputField/customInputField.module.scss";

interface CustomInputFieldProps {
  isLabelClicked: string | null;
  handleClick: (label: string) => void;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
}

const CustomInputField: React.FC<CustomInputFieldProps> = ({
  rightIcon,
  leftIcon,
  placeholder,
  value,
  onChange,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <div className={customInputField.container}>
      <div className={customInputField.inputContainer}>
        {leftIcon && (
          <span className={customInputField.leftIcon}>{leftIcon}</span>
        )}
        <input
          data-testid="customInputField"
          className={customInputField.input}
          type="text"
          placeholder={placeholder || "Type here..."}
          value={value || ""}
          onChange={handleChange}
        />
        {rightIcon && (
          <span className={customInputField.rightIcon}>{rightIcon}</span>
        )}
      </div>
    </div>
  );
};

export default CustomInputField;
