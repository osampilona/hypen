import React, { useState, useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomInputField from "@/components/Forms/CustomInputField/CustomInputField";
import SuggestionsList from "@/components/Forms/SuggestionsList/SuggestionsList";
import { GoSearch } from "react-icons/go";
import { PiGpsFixFill } from "react-icons/pi";
import { RootState, AppDispatch } from "@/lib/store";
import { setSearchValue } from "@/lib/features/filters/inputSlice";
import styles from "@/components/Forms/LocationSearchInputField/locationSearchInputField.module.scss";
import classNames from "classnames";

const SUGGESTIONS = [
  "New York",
  "Los Angeles",
  "Chicago",
  "Houston",
  "Phoenix",
  "Philadelphia",
  "San Antonio",
  "San Diego",
  "Dallas",
  "San Jose",
];

const LocationSearchInputField: React.FC<{ categoryName: string }> = ({
  categoryName,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const searchValue = useSelector(
    (state: RootState) => state.input.searchValue,
  );
  const [filteredItems, setFilteredItems] = useState<string[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const suggestionListRef = useRef<HTMLDivElement>(null);

  const openClassName = classNames(styles.container, {
    [styles.open]: isOpen || isAnimating,
  });

  const updateFilteredItems = useCallback(() => {
    if (searchValue && !SUGGESTIONS.includes(searchValue)) {
      const filtered = SUGGESTIONS.filter((item) =>
        item.toLowerCase().includes(searchValue.toLowerCase()),
      ).slice(0, 5); // Limit to 5 items
      setFilteredItems(filtered);
      setSelectedIndex(-1);
      setIsOpen(true);
      setIsAnimating(true);
    } else {
      setIsOpen(false);
      setIsAnimating(true);
      setTimeout(() => {
        setFilteredItems([]);
        setIsAnimating(false);
      }, 300); // Match this with the transition duration in CSS
    }
  }, [searchValue]);

  const handleInputChange = useCallback(
    (value: string) => {
      dispatch(setSearchValue(value));
    },
    [dispatch],
  );

  const selectItem = useCallback(
    (item: string) => {
      dispatch(setSearchValue(item));
      setIsOpen(false);
      setIsAnimating(true);
      setTimeout(() => {
        setFilteredItems([]);
        setSelectedIndex(-1);
        setIsAnimating(false);
      }, 300);
    },
    [dispatch],
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

  useEffect(() => {
    if (isOpen && suggestionListRef.current) {
      suggestionListRef.current.style.maxHeight = `${suggestionListRef.current.scrollHeight}px`;
    }
  }, [isOpen, filteredItems]);

  const inputId = `location-search-input`;
  const listboxId = `${inputId}-listbox`;

  return (
    <div className={openClassName}>
      <CustomInputField
        categoryName={categoryName}
        placeholder="Search for location"
        leftIcon={<GoSearch />}
        rightIcon={<PiGpsFixFill />}
        value={searchValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <div
        ref={suggestionListRef}
        className={styles.suggestionsList}
        style={{ display: isOpen || isAnimating ? "block" : "none" }}
      >
        {filteredItems.length > 0 && (
          <SuggestionsList
            items={filteredItems}
            onSelect={selectItem}
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
            id={listboxId}
            role="listbox"
            aria-label={`Suggestions for ${categoryName}`}
          />
        )}
      </div>
    </div>
  );
};

export default LocationSearchInputField;
