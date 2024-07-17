import React, { useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
import checkboxStyles from "@/components/Checkbox/checkbox.module.scss";
import classNames from "classnames";
import { FaAsterisk } from "react-icons/fa6";

interface CheckboxProps {
  label: string;
  id: string;
  isDisabled?: boolean;
  isRequired?: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  id,
  isDisabled = false,
  isRequired = false,
}) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleCheckboxChange = () => {
    if (!isDisabled) {
      setIsChecked(!isChecked);
    }
  };

  const containerClassName = classNames(checkboxStyles.container, {
    [checkboxStyles.checked]: isChecked,
    [checkboxStyles.error]: isError,
    [checkboxStyles.disabled]: isDisabled,
  });

  return (
    <>
      <div className={containerClassName} data-testid="checkbox">
        <input
          type="checkbox"
          name={id}
          id={id}
          disabled={isDisabled}
          checked={isChecked}
          required={isRequired}
          onChange={handleCheckboxChange}
        />
        <span className={checkboxStyles.customCheckbox}>
          {isChecked && <IoMdCheckmark />}
        </span>
        <label htmlFor={id}>
          {label}
          {isRequired && <FaAsterisk className={checkboxStyles.required} />}
        </label>
      </div>
      {isError && (
        <small className={checkboxStyles.errorMessage}>
          This is a mandatory field
        </small>
      )}
    </>
  );
};

export default Checkbox;
