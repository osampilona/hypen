import React, { useState, useEffect } from "react";
import styles from "@/components/CustomTimeSlots/customTimeSlots.module.scss";
import {
  format,
  addMinutes,
  startOfToday,
  setHours,
  setMinutes,
  isSameMinute,
  isBefore,
} from "date-fns";
import CtaButton from "@/components/Buttons/CTAButton/CtaButton";

interface CustomTimeSlotsProps {
  timeRange: string;
  onTimeSlotSelect: (times: Date[]) => void;
  onStartSlotSelect: (time: Date) => void;
  startSlot: Date | null;
  endSlot: Date | null;
}

const CustomTimeSlots: React.FC<CustomTimeSlotsProps> = ({
  timeRange,
  onTimeSlotSelect,
  onStartSlotSelect,
  startSlot,
  endSlot,
}) => {
  const [selectedSlots, setSelectedSlots] = useState<Date[]>([]);

  useEffect(() => {
    if (startSlot && endSlot) {
      setSelectedSlots([startSlot, endSlot]);
    } else if (startSlot) {
      setSelectedSlots([startSlot]);
    } else {
      setSelectedSlots([]);
    }
  }, [startSlot, endSlot]);

  const generateTimeSlots = (startHour: number, endHour: number): Date[] => {
    const slots: Date[] = [];
    let currentTime = setMinutes(setHours(startOfToday(), startHour), 0);
    const endTime = setMinutes(setHours(startOfToday(), endHour), 30);

    while (currentTime < endTime) {
      slots.push(currentTime);
      currentTime = addMinutes(currentTime, 30);
    }

    slots.push(endTime);
    return slots;
  };

  const handleSlotClick = (time: Date) => {
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

  const { mainOverlay, additionalOverlays } = calculateOverlayStyle();

  return (
    <div className={styles.container} data-testid="customTimeSlots">
      <div className={styles.overlay} style={mainOverlay}></div>
      {additionalOverlays.map((style, index) => (
        <div key={index} className={styles.overlay} style={style}></div>
      ))}
      {timeSlots.map((time, index) => (
        <CtaButton
          key={index}
          label={format(time, "HH:mm")}
          isPrimary={false}
          outlined={true}
          size="small"
          onClick={() => handleSlotClick(time)}
          className={`${styles.timeSlot} ${
            selectedSlots.some((slot) => isSameMinute(slot, time))
              ? oppositeSelection
                ? styles.oppositeSelection
                : styles.selected
              : ""
          }`}
        />
      ))}
    </div>
  );
};

export default CustomTimeSlots;
