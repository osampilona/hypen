"use client";
import React, { useState } from "react";
import styles from "@/components/Accordion/accordion.module.scss";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
}

const Accordion: React.FC<AccordionProps> = ({
  title,
  children,
  isOpen: propIsOpen,
  onToggle,
}) => {
  const [isOpenState, setIsOpenState] = useState(false);

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
        <h3>{title}</h3>
        <span className={styles.icon}>
          {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </span>
      </button>
      {isOpen && <div className={styles.accordionContent}>{children}</div>}
    </div>
  );
};

export default Accordion;
