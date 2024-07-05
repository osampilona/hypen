import accordion from "@/components/Accordion/accordion.module.scss";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from "react";
import CustomTimeSlots from "@/components/CustomTimeSlots/CustomTimeSlots";
import { format, addMinutes, isBefore } from "date-fns";

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
      setEndSlot(null);
    } else {
      setEndSlot(time);
    }
  };

  const handleConfirmTimeSlot = (times: Date[]) => {
    if (times.length > 1) {
      setStartSlot(times[0]);
      setEndSlot(times[times.length - 1]);
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
                  onTimeSlotSelect={handleConfirmTimeSlot}
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
