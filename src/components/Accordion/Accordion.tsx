"use client";
import React, { useState, useRef, useEffect } from "react";
import styles from "@/components/Accordion/accordion.module.scss";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
  initiallyOpen?: boolean;
  selectionType?: "timeslot" | "date" | null; // Type of selection to show in title
}

const Accordion: React.FC<AccordionProps> = ({
  title,
  children,
  isOpen: propIsOpen,
  onToggle,
  initiallyOpen = true,
  selectionType = null,
}) => {
  const [isOpenState, setIsOpenState] = useState(initiallyOpen);
  const accordionRef = useRef<HTMLDivElement>(null);

  // Get accordion selections from Redux
  const accordionSelections = useSelector(
    (state: RootState) => state.accordionSelections,
  );

  // Determine the display title based on selection type
  const getDisplayTitle = () => {
    if (!selectionType) return title;

    const selection = accordionSelections[selectionType];
    if (selection.displayText) {
      return `${title} - ${selection.displayText}`;
    }

    return title;
  };

  const displayTitle = getDisplayTitle();

  const isOpen = propIsOpen !== undefined ? propIsOpen : isOpenState;

  // Function to check if user has scrolled near the bottom
  const isNearBottom = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // Consider "near bottom" if user is within 200px of the bottom
    return scrollTop + windowHeight >= documentHeight - 200;
  };

  // Function to scroll accordion into view
  const scrollIntoView = () => {
    if (accordionRef.current) {
      accordionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  const handleToggle = () => {
    const wasOpen = isOpen;

    if (onToggle) {
      onToggle();
    } else {
      setIsOpenState(!isOpen);
    }

    // If accordion is being opened and user is near bottom, scroll it into view
    if (!wasOpen && isNearBottom()) {
      // Delay the scroll to allow the accordion to open first
      setTimeout(() => {
        scrollIntoView();
      }, 100);
    }
  };

  return (
    <div
      className={styles.accordion}
      data-testid="accordion"
      ref={accordionRef}
    >
      <button
        className={`${styles.accordionHeader} ${isOpen ? styles.open : ""}`}
        onClick={handleToggle}
      >
        <h3>{displayTitle}</h3>
        <span className={styles.icon}>
          {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </span>
      </button>
      {isOpen && <div className={styles.accordionContent}>{children}</div>}
    </div>
  );
};

export default Accordion;
