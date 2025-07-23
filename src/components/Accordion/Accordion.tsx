"use client";
import React, { useState } from "react";
import styles from "@/components/Accordion/accordion.module.scss";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
  showTimeslotInTitle?: boolean;
}

const Accordion: React.FC<AccordionProps> = ({
  title,
  children,
  isOpen: propIsOpen,
  onToggle,
  showTimeslotInTitle = false,
}) => {
  const [isOpenState, setIsOpenState] = useState(false);

  // Get timeslot state from Redux if showTimeslotInTitle is true
  const { startSlot, endSlot } = useSelector(
    (state: RootState) => state.timeSlots,
  );
  const hasPreselectedSlot = startSlot !== null && endSlot !== null;

  // Determine the display title
  const displayTitle =
    showTimeslotInTitle && hasPreselectedSlot
      ? `Selected: ${startSlot} - ${endSlot}`
      : title;

  const isOpen = propIsOpen !== undefined ? propIsOpen : isOpenState;

  const handleToggle = () => {
    if (onToggle) {
      onToggle();
    } else {
      setIsOpenState(!isOpen);
    }
  };

  return (
    <div className={styles.accordion} data-testid="accordion">
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
