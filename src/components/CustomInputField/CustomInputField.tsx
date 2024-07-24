import React, { useState, useCallback, useEffect } from "react";
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
  const [isOpen, setIsOpen] = useState(false);

  const updateFilteredItems = useCallback(() => {
    if (searchValue) {
      const filtered = suggestions
        .filter((item) =>
          String(displayProperty ? item[displayProperty] : item)
            .toLowerCase()
            .includes(searchValue.toLowerCase()),
        )
        .filter(
          (item) =>
            String(displayProperty ? item[displayProperty] : item) !==
            searchValue,
        )
        .slice(0, 5); // Limit to 5 items

      setFilteredItems(filtered);
      setSelectedIndex(-1);
      setIsOpen(filtered.length > 0);
    } else {
      setFilteredItems([]);
      setIsOpen(false);
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
      setIsOpen(false);
      onSelect(item);
    },
    [dispatch, setValue, onSelect, displayProperty],
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (filteredItems.length === 0) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prevIndex) =>
          prevIndex < filteredItems.length - 1 ? prevIndex + 1 : prevIndex,
        );
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : -1));
      } else if (e.key === "Enter" && selectedIndex !== -1) {
        e.preventDefault();
        selectItem(filteredItems[selectedIndex]);
      }
    },
    [filteredItems, selectedIndex, selectItem],
  );

  useEffect(updateFilteredItems, [searchValue, updateFilteredItems]);

  const inputId = `${categoryName.toLowerCase().replace(/\s+/g, "-")}-input`;
  const listboxId = `${inputId}-listbox`;

  return (
    <div className={styles.container}>
      <h4 className={styles.title} id={`${inputId}-label`}>
        {categoryName}
      </h4>
      <InputField
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        placeholder={placeholder}
        value={searchValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        id={inputId}
        aria-label={categoryName}
        aria-autocomplete="list"
        aria-controls={listboxId}
        aria-expanded={isOpen}
        aria-activedescendant={
          selectedIndex >= 0
            ? `${listboxId}-option-${selectedIndex}`
            : undefined
        }
      />
      <SuggestionsList
        items={filteredItems}
        displayProperty={displayProperty}
        onSelect={selectItem}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
        id={listboxId}
        role="listbox"
        aria-label={`Suggestions for ${categoryName}`}
      />
    </div>
  );
}

export default CustomInputField;
