import React, { useRef, useEffect } from "react";
import styles from "@/components/SuggestionsList/suggestionsList.module.scss";

interface SuggestionsListProps<T> {
  items: T[];
  displayProperty?: keyof T;
  onSelect: (item: T) => void;
  selectedIndex: number;
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
}

function SuggestionsList<T>({
  items,
  displayProperty,
  onSelect,
  selectedIndex,
  setSelectedIndex,
}: SuggestionsListProps<T>) {
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (listRef.current) {
      Array.from(listRef.current.children).forEach((item, i) => {
        item.classList.toggle(styles.selectedItem, i === selectedIndex);
      });
    }
  }, [selectedIndex]);

  if (items.length === 0) return null;

  return (
    <ul className={styles.placesList} ref={listRef}>
      {items.map((item, index) => (
        <li
          key={index}
          className={styles.placeItem}
          onClick={() => onSelect(item)}
          onMouseEnter={() => setSelectedIndex(index)}
        >
          {String(displayProperty ? item[displayProperty] : item)}
        </li>
      ))}
    </ul>
  );
}

export default SuggestionsList;
