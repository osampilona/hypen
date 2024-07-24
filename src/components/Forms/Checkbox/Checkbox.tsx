import React, { useState, useEffect } from "react";
import { IoMdCheckmark } from "react-icons/io";
import checkboxStyles from "@/components/Forms/Checkbox/checkbox.module.scss";
import classNames from "classnames";
import { FaAsterisk } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { toggleCheckbox } from "@/lib/features/filters/checkboxSlice";

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
  const isChecked = useSelector((state: RootState) => state.checkbox[id]);
  const dispatch = useDispatch();

  const [localIsDisabled, setLocalIsDisabled] = useState(isDisabled);
  const [isError, setIsError] = useState(false);

  const handleCheckboxChange = () => {
    if (!localIsDisabled) {
      dispatch(toggleCheckbox(id));
    }
  };

  useEffect(() => {
    setLocalIsDisabled(isDisabled);
  }, [isDisabled]);

  const containerClassName = classNames(checkboxStyles.container, {
    [checkboxStyles.checked]: isChecked,
    [checkboxStyles.error]: isError,
    [checkboxStyles.disabled]: localIsDisabled,
  });

  return (
    <>
      <div className={containerClassName} data-testid="checkbox">
        <input
          type="checkbox"
          name={id}
          id={id}
          disabled={localIsDisabled}
          checked={!!isChecked} // ensure it is boolean
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
