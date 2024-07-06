import styles from "@/components/TimeSlotsSelector/timeSlotsSelector.module.scss";
import React, { useState, useEffect } from "react";
import CtaButton from "../Buttons/CTAButton/CtaButton";
import { timeSlots } from "@/constants/timeSlots";

interface TimeSlotsSelectorProps {
  startSlot: string | null;
  endSlot: string | null;
  setStartSlot: (slot: string | null) => void;
  setEndSlot: (slot: string | null) => void;
}

type TimeSlotPeriod = keyof typeof timeSlots;

const TimeSlotSelector: React.FC<TimeSlotsSelectorProps> = ({
  startSlot,
  endSlot,
  setStartSlot,
  setEndSlot,
}) => {
  const [selectedSlots, setSelectedSlots] = useState<string[]>([]);

  useEffect(() => {
    if (startSlot && endSlot) {
      const slotsInRange = getSlotsInRange(startSlot, endSlot);
      setSelectedSlots(slotsInRange);
    } else {
      setSelectedSlots(startSlot ? [startSlot] : []);
    }
  }, [startSlot, endSlot]);

  const toggleSlot = (slot: string) => {
    if (!startSlot) {
      // Select start time
      setStartSlot(slot);
      setSelectedSlots([slot]);
    } else if (!endSlot) {
      // Select end time
      setEndSlot(slot);
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
          <h5>{period.charAt(0).toUpperCase() + period.slice(1)}</h5>
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
