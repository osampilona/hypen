import React, { useRef, useEffect } from "react";
import styles from "./suggestionsList.module.scss";

interface SuggestionsListProps<T> {
  items: T[];
  displayProperty?: keyof T;
  onSelect: (item: T) => void;
  selectedIndex: number;
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
  id: string;
  role: string;
  "aria-label": string;
}

function SuggestionsList<T>({
  items,
  displayProperty,
  onSelect,
  selectedIndex,
  setSelectedIndex,
  id,
  role,
  "aria-label": ariaLabel,
}: SuggestionsListProps<T>) {
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (listRef.current) {
      const selectedElement = listRef.current.children[
        selectedIndex
      ] as HTMLElement;
      if (selectedElement) {
        selectedElement.scrollIntoView({
          block: "nearest",
          behavior: "smooth",
        });
      }
    }
  }, [selectedIndex]);

  if (items.length === 0) return null;

  return (
    <ul
      className={styles.placesList}
      ref={listRef}
      id={id}
      role={role}
      aria-label={ariaLabel}
      data-testid="suggestionsList"
    >
      {items.map((item, index) => (
        <li
          key={index}
          id={`${id}-option-${index}`}
          role="option"
          aria-selected={index === selectedIndex}
          className={`${styles.placeItem} ${index === selectedIndex ? styles.selectedItem : ""}`}
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
