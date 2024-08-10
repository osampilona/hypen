import React, { useState, useRef, useEffect } from "react";
import accordion from "@/components/Accordion/accordion.module.scss";
import { IoIosArrowDown } from "react-icons/io";

interface AccordionItem {
  title: string;
  content: string | React.ReactNode; // Use React.ReactNode for JSX elements
}

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    if (activeIndex !== null && contentRefs.current[activeIndex]) {
      contentRefs.current[activeIndex]!.style.height =
        `${contentRefs.current[activeIndex]!.scrollHeight}px`;
    }
  }, [activeIndex]);

  return (
    <div className={accordion.container} data-testid="accordion">
      {items.map((item, index) => (
        <div
          key={index}
          className={accordion.item}
          style={{
            height:
              activeIndex === index
                ? `${(contentRefs.current[index]?.scrollHeight ?? 0) + 48}px`
                : "3rem",
          }}
        >
          <div
            className={accordion.title}
            onClick={() => handleToggle(index)}
            data-testid={`accordion-title-${index}`}
          >
            {item.title}
            <IoIosArrowDown
              className={`${accordion.icon} ${
                activeIndex === index ? accordion.iconActive : ""
              }`}
            />
          </div>
          <div
            ref={(el) => {
              contentRefs.current[index] = el;
            }}
            className={accordion.content}
            style={{
              height: activeIndex === index ? "auto" : "0",
              opacity: activeIndex === index ? "1" : "0",
            }}
            data-testid={`accordion-content-${index}`}
          >
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
