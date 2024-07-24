import React, { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomInputField from "@/components/CustomInputField/CustomInputField";
import SuggestionsList from "@/components/SuggestionsList/SuggestionsList";
import { GoSearch } from "react-icons/go";
import { PiGpsFixFill } from "react-icons/pi";
import { RootState, AppDispatch } from "@/lib/store";
import { setSearchValue } from "@/lib/features/filters/inputSlice";

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

  const updateFilteredItems = useCallback(() => {
    if (searchValue && !SUGGESTIONS.includes(searchValue)) {
      const filtered = SUGGESTIONS.filter((item) =>
        item.toLowerCase().includes(searchValue.toLowerCase()),
      ).slice(0, 5); // Limit to 5 items
      setFilteredItems(filtered);
      setSelectedIndex(-1);
      setIsOpen(filtered.length > 0);
    } else {
      setFilteredItems([]);
      setIsOpen(false);
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
      setFilteredItems([]);
      setSelectedIndex(-1);
      setIsOpen(false);
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

  const inputId = `location-search-input`;
  const listboxId = `${inputId}-listbox`;

  return (
    <>
      <CustomInputField
        categoryName={categoryName}
        placeholder="Search for location"
        leftIcon={<GoSearch />}
        rightIcon={<PiGpsFixFill />}
        value={searchValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      {isOpen && filteredItems.length > 0 && (
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
    </>
  );
};

export default LocationSearchInputField;
