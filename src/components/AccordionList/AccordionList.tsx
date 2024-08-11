import React, { useState } from "react";
import Accordion from "@/components/Accordion/Accordion";
import styles from "@/components/AccordionList/accordionList.module.scss";

interface AccordionItem {
  title: string;
  content: React.ReactNode;
}

interface AccordionListProps {
  items: AccordionItem[];
  allowMultipleOpen?: boolean;
}

const AccordionList: React.FC<AccordionListProps> = ({
  items,
  allowMultipleOpen = false,
}) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const handleToggle = (index: number) => {
    setOpenIndexes((prevIndexes) => {
      if (prevIndexes.includes(index)) {
        return prevIndexes.filter((i) => i !== index);
      } else {
        return allowMultipleOpen ? [...prevIndexes, index] : [index];
      }
    });
  };

  return (
    <div className={styles.accordionList}>
      {items.map((item, index) => (
        <Accordion
          key={index}
          title={item.title}
          isOpen={openIndexes.includes(index)}
          onToggle={() => handleToggle(index)}
        >
          {item.content}
        </Accordion>
      ))}
    </div>
  );
};

export default AccordionList;
