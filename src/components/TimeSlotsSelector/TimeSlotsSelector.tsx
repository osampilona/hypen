import styles from "@/components/TimeSlotsSelector/timeSlotsSelector.module.scss";
import React, { useState } from "react";
import CtaButton from "../Buttons/CTAButton/CtaButton";
import { timeSlots } from "@/constants/timeSlots";

interface TimeSlotsSelectorProps {
  // Add your component props here
}

type TimeSlotPeriod = keyof typeof timeSlots;

const TimeSlotSelector: React.FC<TimeSlotsSelectorProps> = () => {
  const [selectedSlots, setSelectedSlots] = useState<string[]>([]);
  const [startSlot, setStartSlot] = useState<string | null>(null);
  const [endSlot, setEndSlot] = useState<string | null>(null);

  const toggleSlot = (slot: string) => {
    if (!startSlot) {
      // Select start time
      setStartSlot(slot);
      setSelectedSlots([slot]);
    } else if (!endSlot) {
      // Select end time
      setEndSlot(slot);
      const slotsInRange = getSlotsInRange(startSlot, slot);
      setSelectedSlots(slotsInRange);
    } else {
      // Reset selection
      setStartSlot(slot);
      setEndSlot(null);
      setSelectedSlots([slot]);
    }
  };

  const getSlotsInRange = (start: string, end: string): string[] => {
    const allSlots = Object.values(timeSlots).flat();
    const startIndex = allSlots.indexOf(start);
    const endIndex = allSlots.indexOf(end);
    if (startIndex === -1 || endIndex === -1) return [];
    return allSlots.slice(
      Math.min(startIndex, endIndex),
      Math.max(startIndex, endIndex) + 1,
    );
  };

  return (
    <div className={styles.container}>
      {Object.keys(timeSlots).map((period) => (
        <div key={period} className={styles.timeSlotPeriod}>
          <h3>{period.charAt(0).toUpperCase() + period.slice(1)}</h3>
          <div className={styles.timeSlotButtons}>
            {timeSlots[period as TimeSlotPeriod].map((slot) => (
              <CtaButton
                key={slot}
                className={`${styles.timeSlotButton} ${
                  selectedSlots.includes(slot)
                    ? slot === startSlot || slot === endSlot
                      ? styles.selected
                      : styles.inRange
                    : ""
                }`}
                onClick={() => toggleSlot(slot)}
                label={slot}
                outlined={true}
                size={"small"}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimeSlotSelector;
