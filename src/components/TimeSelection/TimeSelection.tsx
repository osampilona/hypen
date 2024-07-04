import timeSelection from "@/components/TimeSelection/timeSelection.module.scss";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from "react";

interface TimeSelectionProps {
  title: string;
  options: string[];
}

const TimeSelection: React.FC<TimeSelectionProps> = ({ title, options }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div
      className={timeSelection.container}
      data-testid="timeSelection"
      role="region"
      aria-labelledby="time-selection"
    >
      <h3 className={timeSelection.title} id="time-selection-title">
        {title}
      </h3>
      <ul className={timeSelection.list}>
        {options.map((option, index) => (
          <li className={timeSelection.item} key={index}>
            <button
              className={timeSelection.button}
              aria-expanded={expandedIndex === index}
              onClick={() => handleClick(index)}
            >
              <span className={timeSelection.text}>{option}</span>
              <span className={timeSelection.icon} aria-hidden="true">
                {expandedIndex === index ? (
                  <IoIosArrowUp />
                ) : (
                  <IoIosArrowDown />
                )}
              </span>
            </button>
            {expandedIndex === index && (
              <div className={timeSelection.content}>
                {/* Add content to show when expanded, if any */}
                More details about {option}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TimeSelection;
