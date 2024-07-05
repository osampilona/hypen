import accordion from "@/components/Accordion/accordion.module.scss";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from "react";
import CustomTimeSlots from "@/components/CustomTimeSlots/CustomTimeSlots";
import { format } from "date-fns";

interface AccordionProps {
  title: string;
  options: string[];
}

const Accordion: React.FC<AccordionProps> = ({ title, options }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [startSlot, setStartSlot] = useState<Date | null>(null);
  const [endSlot, setEndSlot] = useState<Date | null>(null);

  const handleClick = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const handleTimeSlotSelect = (time: Date) => {
    if (!startSlot) {
      setStartSlot(time);
      setEndSlot(null); // Reset end slot if start slot is reselected
    } else if (startSlot && !endSlot) {
      setEndSlot(time);
    } else {
      // If both start and end slots are selected and user selects a new slot, restart the selection
      setStartSlot(time);
      setEndSlot(null);
    }
  };

  const formatTimeRange = (start: Date | null, end: Date | null) => {
    if (start && end) {
      return `${format(start, "HH:mm")} to ${format(end, "HH:mm")}`;
    } else if (start) {
      return `${format(start, "HH:mm")} - Choose end time`;
    }
    return "";
  };

  return (
    <div
      className={accordion.container}
      data-testid="accordion"
      role="region"
      aria-labelledby="accordion"
    >
      <h3 className={accordion.title} id="accordion-title">
        {title} {startSlot && ` - ${formatTimeRange(startSlot, endSlot)}`}
      </h3>
      <ul className={accordion.list}>
        {options.map((option, index) => (
          <li className={accordion.item} key={index}>
            <button
              className={accordion.button}
              aria-expanded={expandedIndex === index}
              onClick={() => handleClick(index)}
            >
              <span className={accordion.text}>{option}</span>
              <span className={accordion.icon} aria-hidden="true">
                {expandedIndex === index ? (
                  <IoIosArrowUp />
                ) : (
                  <IoIosArrowDown />
                )}
              </span>
            </button>
            {expandedIndex === index && (
              <div className={accordion.content}>
                <CustomTimeSlots
                  timeRange={option}
                  onTimeSlotSelect={(times) =>
                    handleTimeSlotSelect(times[times.length - 1])
                  }
                  onStartSlotSelect={handleTimeSlotSelect}
                />
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Accordion;
