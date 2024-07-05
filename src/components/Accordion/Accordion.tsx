import accordion from "@/components/Accordion/accordion.module.scss";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from "react";
import CustomTimeSlots from "@/components/CustomTimeSlots/CustomTimeSlots";
import { format, addMinutes } from "date-fns";

interface AccordionProps {
  title: string;
  options: string[];
}

const Accordion: React.FC<AccordionProps> = ({ title, options }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [selectedTimes, setSelectedTimes] = useState<(Date[] | null)[]>(
    new Array(options.length).fill(null),
  );
  const [startSlot, setStartSlot] = useState<{
    index: number;
    time: Date | null;
  }>({ index: -1, time: null });

  const handleClick = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
    setStartSlot({ index: -1, time: null }); // Reset start slot when expanding/collapsing sections
  };

  const handleTimeSlotSelect = (times: Date[], index: number) => {
    const newTimes = [...selectedTimes];
    newTimes[index] = times;
    setSelectedTimes(newTimes);
    setStartSlot({ index: -1, time: null });
  };

  const handleStartSlotSelect = (time: Date, index: number) => {
    setStartSlot({ index, time });
    const newTimes = [...selectedTimes];
    newTimes[index] = [time]; // Set the new starting time
    setSelectedTimes(newTimes);
  };

  const formatTimeRange = (times: Date[]) => {
    if (times.length === 1) {
      return `${format(times[0], "HH:mm")} - Choose end time`;
    } else if (times.length > 1) {
      return `${format(times[0], "HH:mm")} to ${format(addMinutes(times[times.length - 1], 30), "HH:mm")}`;
    }
    return "";
  };

  const selectedTimeRanges = selectedTimes
    .filter((times) => times && times.length > 0)
    .map((times) => formatTimeRange(times!))
    .join(", ");

  return (
    <div
      className={accordion.container}
      data-testid="accordion"
      role="region"
      aria-labelledby="accordion"
    >
      <h3 className={accordion.title} id="accordion-title">
        {title} {selectedTimeRanges && ` - ${selectedTimeRanges}`}
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
                    handleTimeSlotSelect(times, index)
                  }
                  onStartSlotSelect={(time) =>
                    handleStartSlotSelect(time, index)
                  }
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
