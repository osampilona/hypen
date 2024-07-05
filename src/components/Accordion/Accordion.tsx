import accordion from "@/components/Accordion/accordion.module.scss";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from "react";
import CustomTimeSlots from "@/components/CustomTimeSlots/CustomTimeSlots";
import { format, isBefore } from "date-fns";

interface AccordionProps {
  title: string;
  options: string[];
}

const Accordion: React.FC<AccordionProps> = ({ title, options }) => {
  const [expandedIndices, setExpandedIndices] = useState<number[]>([]);
  const [startSlot, setStartSlot] = useState<Date | null>(null);
  const [endSlot, setEndSlot] = useState<Date | null>(null);

  const handleToggle = (index: number) => {
    if (expandedIndices.includes(index)) {
      setExpandedIndices(expandedIndices.filter((i) => i !== index));
    } else {
      setExpandedIndices([...expandedIndices, index]);
    }
  };

  const handleTimeSlotSelect = (time: Date) => {
    if (!startSlot || (startSlot && endSlot)) {
      setStartSlot(time);
      setEndSlot(null); // Reset end slot if start slot is reselected
    } else if (startSlot && !endSlot) {
      if (isBefore(startSlot, time)) {
        setEndSlot(time);
      } else {
        setEndSlot(startSlot);
        setStartSlot(time);
      }
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
              aria-expanded={expandedIndices.includes(index)}
              onClick={() => handleToggle(index)}
            >
              <span className={accordion.text}>{option}</span>
              <span className={accordion.icon} aria-hidden="true">
                {expandedIndices.includes(index) ? (
                  <IoIosArrowUp />
                ) : (
                  <IoIosArrowDown />
                )}
              </span>
            </button>
            {expandedIndices.includes(index) && (
              <div className={accordion.content}>
                <CustomTimeSlots
                  timeRange={option}
                  onTimeSlotSelect={(times) =>
                    handleTimeSlotSelect(times[times.length - 1])
                  }
                  onStartSlotSelect={handleTimeSlotSelect}
                  startSlot={startSlot}
                  endSlot={endSlot}
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
