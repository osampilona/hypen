import React, { useState } from "react";
import styles from "@/components/CustomTimeSlots/customTimeSlots.module.scss";
import {
  format,
  addMinutes,
  startOfToday,
  setHours,
  setMinutes,
  isSameMinute,
  isBefore,
  isAfter,
} from "date-fns";
import CtaButton from "@/components/Buttons/CTAButton/CtaButton";

interface CustomTimeSlotsProps {
  timeRange: string;
  onTimeSlotSelect: (times: Date[]) => void;
  onStartSlotSelect: (time: Date) => void;
}

const CustomTimeSlots: React.FC<CustomTimeSlotsProps> = ({
  timeRange,
  onTimeSlotSelect,
  onStartSlotSelect,
}) => {
  const [selectedSlots, setSelectedSlots] = useState<Date[]>([]);
  const [startSlot, setStartSlot] = useState<Date | null>(null);

  const generateTimeSlots = (startHour: number, endHour: number): Date[] => {
    const slots: Date[] = [];
    let currentTime = setMinutes(setHours(startOfToday(), startHour), 0);
    const endTime = setMinutes(setHours(startOfToday(), endHour), 30);

    while (currentTime < endTime) {
      slots.push(currentTime);
      currentTime = addMinutes(currentTime, 30);
    }

    // Add the final slot ending exactly at endHour + 30 minutes
    slots.push(endTime);

    return slots;
  };

  const handleSlotClick = (time: Date) => {
    if (!startSlot) {
      setStartSlot(time);
      setSelectedSlots([time]);
      onStartSlotSelect(time);
    } else {
      const newSlots = generateSelectedSlots(startSlot, time);
      setSelectedSlots(newSlots);
      setStartSlot(null);
      onTimeSlotSelect(newSlots);
    }
  };

  const generateSelectedSlots = (start: Date, end: Date): Date[] => {
    const slots: Date[] = [];
    let currentTime = start;

    if (isBefore(start, end) || isSameMinute(start, end)) {
      while (isBefore(currentTime, end) || isSameMinute(currentTime, end)) {
        slots.push(currentTime);
        currentTime = addMinutes(currentTime, 30);
      }
    } else {
      while (isBefore(end, currentTime) || isSameMinute(end, currentTime)) {
        slots.unshift(currentTime);
        currentTime = addMinutes(currentTime, -30);
      }
    }

    return slots;
  };

  let timeSlots: Date[];
  switch (timeRange) {
    case "Morning":
      timeSlots = generateTimeSlots(6, 11); // 6:00 to 11:30 ending at 12:00
      break;
    case "Afternoon":
      timeSlots = generateTimeSlots(12, 16); // 12:00 to 16:30 ending at 17:00
      break;
    case "Evening":
      timeSlots = generateTimeSlots(17, 21); // 17:00 to 21:00
      break;
    default:
      timeSlots = [];
  }

  return (
    <div className={styles.container} data-testid="customTimeSlots">
      {timeSlots.map((time, index) => {
        const isSelected = selectedSlots.some((slot) =>
          isSameMinute(slot, time),
        );
        const isRangeStart =
          isSelected &&
          isSameMinute(selectedSlots[0], time) &&
          selectedSlots.length > 1;
        const isRangeEnd =
          isSelected &&
          isSameMinute(selectedSlots[selectedSlots.length - 1], time) &&
          selectedSlots.length > 1;
        const isRangeMiddle =
          isSelected &&
          !isRangeStart &&
          !isRangeEnd &&
          selectedSlots.length > 1;

        const classNames = [
          isRangeStart ? styles.rangeStart : "",
          isRangeEnd ? styles.rangeEnd : "",
          isRangeMiddle ? styles.rangeMiddle : "",
          isSelected && !isRangeStart && !isRangeEnd && !isRangeMiddle
            ? styles.rangeSelected
            : "",
        ]
          .filter(Boolean)
          .join(" ");

        return (
          <CtaButton
            key={index}
            label={format(time, "HH:mm")}
            isPrimary={false}
            outlined={true}
            size="small"
            onClick={() => handleSlotClick(time)}
            className={classNames}
          />
        );
      })}
    </div>
  );
};

export default CustomTimeSlots;
