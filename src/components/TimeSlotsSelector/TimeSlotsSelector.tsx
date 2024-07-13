import styles from "@/components/TimeSlotsSelector/timeSlotsSelector.module.scss";
import React, { useState, useEffect } from "react";
import CtaButton from "../Buttons/CTAButton/CtaButton";
import { timeSlots } from "@/constants/timeSlots";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { toggleSlot } from "@/lib/features/filters/filters";

type TimeSlotPeriod = keyof typeof timeSlots;

const TimeSlotSelector: React.FC = () => {
  const dispatch = useDispatch();
  const startSlot = useSelector((state: RootState) => state.filters.startSlot);
  const endSlot = useSelector((state: RootState) => state.filters.endSlot);
  const [selectedSlots, setSelectedSlots] = useState<string[]>([]);

  useEffect(() => {
    if (startSlot && endSlot) {
      const slotsInRange = getSlotsInRange(startSlot, endSlot);
      setSelectedSlots(slotsInRange);
    } else {
      setSelectedSlots(startSlot ? [startSlot] : []);
    }
  }, [startSlot, endSlot]);

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
    <div className={styles.container} data-testid="timeSlotsSelector">
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
                onClick={() => dispatch(toggleSlot(slot))}
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
