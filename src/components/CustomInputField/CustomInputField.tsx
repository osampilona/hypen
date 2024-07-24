// CustomInputField.tsx
import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./customInputField.module.scss";
import { RootState, AppDispatch } from "@/lib/store";
import InputField from "@/components/InputField/InputField";
import SuggestionsList from "@/components/SuggestionsList/SuggestionsList";

interface CustomInputFieldProps<T> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  placeholder?: string;
  categoryName: string;
  suggestions: T[];
  displayProperty?: keyof T;
  onSelect: (item: T) => void;
  getValue: (state: RootState) => string;
  setValue: (value: string) => { type: string; payload: string };
}

function CustomInputField<T>({
  leftIcon,
  rightIcon,
  placeholder = "Type here...",
  categoryName,
  suggestions,
  displayProperty,
  onSelect,
  getValue,
  setValue,
}: CustomInputFieldProps<T>) {
  const dispatch = useDispatch<AppDispatch>();
  const searchValue = useSelector(getValue);
  const [filteredItems, setFilteredItems] = useState<T[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const updateFilteredItems = useCallback(() => {
    if (searchValue) {
      const filtered = suggestions.filter((item) =>
        String(displayProperty ? item[displayProperty] : item)
          .toLowerCase()
          .includes(searchValue.toLowerCase()),
      );
      setFilteredItems(
        filtered.filter(
          (item) =>
            String(displayProperty ? item[displayProperty] : item) !==
            searchValue,
        ),
      );
      setSelectedIndex(-1);
    } else {
      setFilteredItems([]);
    }
  }, [searchValue, suggestions, displayProperty]);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setValue(e.target.value));
    },
    [dispatch, setValue],
  );

  const selectItem = useCallback(
    (item: T) => {
      const value = String(displayProperty ? item[displayProperty] : item);
      dispatch(setValue(value));
      setFilteredItems([]);
      setSelectedIndex(-1);
      onSelect(item);
    },
    [dispatch, setValue, onSelect, displayProperty],
  );

  React.useEffect(updateFilteredItems, [searchValue, updateFilteredItems]);

  return (
    <div className={styles.container}>
      <h4 className={styles.title}>{categoryName}</h4>
      <InputField
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        placeholder={placeholder}
        value={searchValue}
        onChange={handleInputChange}
        onKeyDown={(e) => {
          /* Handle key down */
        }}
      />
      <SuggestionsList
        items={filteredItems}
        displayProperty={displayProperty}
        onSelect={selectItem}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
    </div>
  );
}

export default CustomInputField;
