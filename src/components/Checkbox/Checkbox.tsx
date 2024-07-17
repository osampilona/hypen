import React, { useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
import checkboxStyles from "@/components/Checkbox/checkbox.module.scss";
import classNames from "classnames";
import { FaAsterisk } from "react-icons/fa6";

interface CheckboxProps {
  label: string;
  isDisabled?: boolean;
  isRequired?: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
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
          name="checkbox"
          id="checkbox"
          disabled={isDisabled}
          checked={isChecked}
          required={isRequired}
          onChange={handleCheckboxChange}
        />
        <span className={checkboxStyles.customCheckbox}>
          {isChecked && <IoMdCheckmark />}
        </span>
        <label htmlFor="checkbox">
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
