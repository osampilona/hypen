import styles from "@/components/TimeSlotsSelector/timeSlotsSelector.module.scss";
import React, { useState, useEffect } from "react";
import CtaButton from "../Buttons/CTAButton/CtaButton";
import { timeSlots } from "@/constants/timeSlots";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { toggleSlot } from "@/lib/features/filters/timeSlotsSlice";

type TimeSlotPeriod = keyof typeof timeSlots;

interface TimeSlotsSelectorProps {
  categoryName: string;
}

const TimeSlotSelector: React.FC<TimeSlotsSelectorProps> = ({
  categoryName,
}) => {
  const dispatch = useDispatch();
  const startSlot = useSelector(
    (state: RootState) => state.timeSlots.startSlot,
  );
  const endSlot = useSelector((state: RootState) => state.timeSlots.endSlot);
  const [selectedSlots, setSelectedSlots] = useState<string[]>([]);

  useEffect(() => {
    if (startSlot && endSlot) {
      setSelectedSlots(getSlotsInRange(startSlot, endSlot));
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
      <div>
        <h4>
          <span className={styles.categoryName}>{categoryName}</span>
          {startSlot ? (
            <>
              <span className={styles.slotTime}>
                {startSlot} to {endSlot || "..."}
              </span>
            </>
          ) : null}
        </h4>
        <p></p>
      </div>
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
                size={"large"}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimeSlotSelector;
