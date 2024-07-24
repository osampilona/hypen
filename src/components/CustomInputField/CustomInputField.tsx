import React, { useState, useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./customInputField.module.scss";
import { RootState, AppDispatch } from "@/lib/store";
import { setSearchValue } from "@/lib/features/filters/inputSlice";

interface CustomInputFieldProps {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  placeholder?: string;
  categoryName: string;
}

const SUGGESTIONS = [
  "New York",
  "Los Angeles",
  "Chicago",
  "Houston",
  "Phoenix",
];

const CustomInputField: React.FC<CustomInputFieldProps> = ({
  leftIcon,
  rightIcon,
  placeholder = "Type here...",
  categoryName,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const searchValue = useSelector(
    (state: RootState) => state.input.searchValue,
  );
  const [filteredPlaces, setFilteredPlaces] = useState<string[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const updateFilteredPlaces = useCallback(() => {
    if (searchValue) {
      const filtered = SUGGESTIONS.filter((place) =>
        place.toLowerCase().includes(searchValue.toLowerCase()),
      );
      setFilteredPlaces(filtered.filter((place) => place !== searchValue));
      setSelectedIndex(-1);
    } else {
      setFilteredPlaces([]);
    }
  }, [searchValue]);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setSearchValue(e.target.value));
    },
    [dispatch],
  );

  const updateSelectedItem = useCallback((newIndex: number) => {
    if (listRef.current) {
      Array.from(listRef.current.children).forEach((item, i) => {
        item.classList.toggle(styles.selectedItem, i === newIndex);
      });
    }
  }, []);

  const selectItem = useCallback(
    (item: string) => {
      dispatch(setSearchValue(item));
      setFilteredPlaces([]);
      setSelectedIndex(-1);
    },
    [dispatch],
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (filteredPlaces.length === 0) return;

      switch (e.key) {
        case "ArrowDown":
        case "ArrowUp":
          e.preventDefault();
          setSelectedIndex((prev) => {
            const newIndex =
              e.key === "ArrowDown"
                ? Math.min(prev + 1, filteredPlaces.length - 1)
                : Math.max(prev - 1, 0);
            updateSelectedItem(newIndex);
            return newIndex;
          });
          break;
        case "Enter":
          if (selectedIndex >= 0) {
            selectItem(filteredPlaces[selectedIndex]);
          }
          break;
      }
    },
    [filteredPlaces, selectedIndex, updateSelectedItem, selectItem],
  );

  React.useEffect(updateFilteredPlaces, [searchValue, updateFilteredPlaces]);

  return (
    <div className={styles.container}>
      <h4 className={styles.title}>{categoryName}</h4>
      <div className={styles.inputContainer}>
        {leftIcon && <span className={styles.leftIcon}>{leftIcon}</span>}
        <input
          ref={inputRef}
          className={styles.input}
          type="text"
          value={searchValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
        />
        {rightIcon && <span className={styles.rightIcon}>{rightIcon}</span>}
      </div>
      {filteredPlaces.length > 0 && (
        <ul className={styles.placesList} ref={listRef}>
          {filteredPlaces.map((place, index) => (
            <li
              key={index}
              className={styles.placeItem}
              onClick={() => selectItem(place)}
            >
              {place}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomInputField;
