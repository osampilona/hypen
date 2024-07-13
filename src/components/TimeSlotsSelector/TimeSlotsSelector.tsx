import styles from "@/components/TimeSlotsSelector/timeSlotsSelector.module.scss";
import React, { useState, useEffect } from "react";
import CtaButton from "../Buttons/CTAButton/CtaButton";
import { timeSlots } from "@/constants/timeSlots";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import {
  toggleSlot,
  setStartSlot,
  setEndSlot,
} from "@/lib/features/filters/timeSlotsSlice";

type TimeSlotPeriod = keyof typeof timeSlots;

const TimeSlotSelector: React.FC = () => {
  const dispatch = useDispatch();
  const startSlot = useSelector(
    (state: RootState) => state.timeSlots.startSlot,
  );
  const endSlot = useSelector((state: RootState) => state.timeSlots.endSlot);
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

  const handleSlotClick = (slot: string) => {
    if (!startSlot) {
      dispatch(setStartSlot(slot));
    } else if (!endSlot) {
      if (startSlot === slot) {
        dispatch(setStartSlot(null));
      } else if (startSlot < slot) {
        dispatch(setEndSlot(slot));
      } else {
        dispatch(setEndSlot(startSlot));
        dispatch(setStartSlot(slot));
      }
    } else {
      dispatch(setStartSlot(slot));
      dispatch(setEndSlot(null));
    }
  };

  return (
    <div className={styles.container} data-testid="timeSlotsSelector">
      <p>
        {startSlot ? (
          endSlot ? (
            <>
              From {startSlot} to {endSlot}
            </>
          ) : (
            <>From {startSlot} to</>
          )
        ) : (
          <>Select a time range</>
        )}
      </p>
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
                onClick={() => handleSlotClick(slot)}
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
