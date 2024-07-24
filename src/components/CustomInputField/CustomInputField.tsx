import React, { useState, useRef, KeyboardEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import customInputField from "@/components/CustomInputField/customInputField.module.scss";
import { RootState, AppDispatch } from "@/lib/store";
import { setSearchValue } from "@/lib/features/filters/inputSlice";

interface CustomInputFieldProps {
  isLabelClicked: string | null;
  handleClick: (label: string) => void;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  placeholder?: string;
  categoryName: string;
  value: string;
  onChange: (value: string) => void;
}

const hardcodedSuggestions = [
  "New York",
  "Los Angeles",
  "Chicago",
  "Houston",
  "Phoenix",
];

const CustomInputField: React.FC<CustomInputFieldProps> = ({
  leftIcon,
  rightIcon,
  placeholder,
  categoryName,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const searchValue = useSelector(
    (state: RootState) => state.input.searchValue,
  );

  const [filteredPlaces, setFilteredPlaces] = useState<string[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    dispatch(setSearchValue(value));
    if (value) {
      const filtered = hardcodedSuggestions.filter((place) =>
        place.toLowerCase().includes(value.toLowerCase()),
      );
      setFilteredPlaces(filtered);
      setSelectedIndex(-1);
    } else {
      setFilteredPlaces([]);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (filteredPlaces.length === 0) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev < filteredPlaces.length - 1 ? prev + 1 : prev,
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : 0));
        break;
      case "Enter":
        if (selectedIndex >= 0) {
          dispatch(setSearchValue(filteredPlaces[selectedIndex]));
          setFilteredPlaces([]);
          setSelectedIndex(-1);
        }
        break;
    }
  };

  return (
    <div className={customInputField.container}>
      <h4 className={customInputField.title}>{categoryName}</h4>
      <div className={customInputField.inputContainer}>
        {leftIcon && (
          <span className={customInputField.leftIcon}>{leftIcon}</span>
        )}
        <input
          ref={inputRef}
          className={customInputField.input}
          type="text"
          value={searchValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder={placeholder || "Type here..."}
        />
        {rightIcon && (
          <span className={customInputField.rightIcon}>{rightIcon}</span>
        )}
      </div>
      {filteredPlaces.length > 0 && (
        <ul className={customInputField.placesList}>
          {filteredPlaces.map((place, index) => (
            <li
              key={index}
              className={`${customInputField.placeItem} ${
                index === selectedIndex ? customInputField.selectedItem : ""
              }`}
              onClick={() => {
                dispatch(setSearchValue(place));
                setFilteredPlaces([]);
                setSelectedIndex(-1);
              }}
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
