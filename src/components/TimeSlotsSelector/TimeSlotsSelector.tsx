"use client";
import styles from "@/components/TimeSlotsSelector/timeSlotsSelector.module.scss";
import React, { useState, useEffect } from "react";
import CtaButton from "../Buttons/CTAButton/CtaButton";
import { timeSlots } from "@/constants/timeSlots";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import {
  toggleSlot,
  resetTimeSlots,
} from "@/lib/features/filters/timeSlotsSlice";
import { setTimeslotSelection } from "@/lib/features/filters/accordionSelectionsSlice";

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
  const [buttonSize, setButtonSize] = useState<"medium" | "large">("large");

  useEffect(() => {
    if (startSlot && endSlot) {
      setSelectedSlots(getSlotsInRange(startSlot, endSlot));
    } else {
      setSelectedSlots(startSlot ? [startSlot] : []);
    }
  }, [startSlot, endSlot]);

  // Update accordion selection when timeslots change
  useEffect(() => {
    if (startSlot && endSlot) {
      dispatch(
        setTimeslotSelection({
          value: `${startSlot}-${endSlot}`,
          displayText: `${startSlot} - ${endSlot}`,
        }),
      );
    } else if (startSlot) {
      dispatch(
        setTimeslotSelection({
          value: startSlot,
          displayText: startSlot,
        }),
      );
    } else {
      dispatch(
        setTimeslotSelection({
          value: null,
          displayText: null,
        }),
      );
    }
  }, [startSlot, endSlot, dispatch]);

  // Handle responsive button size
  useEffect(() => {
    const handleResize = () => {
      // Assuming your breakpoint-lg is 1024px, adjust this value to match your breakpoint
      setButtonSize(window.innerWidth >= 1024 ? "large" : "medium");
    };

    // Set initial size
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  // Helper function to determine if a slot is at the start or end of a row range
  const getSlotPositionInRange = (
    slot: string,
    periodSlots: string[],
    index: number,
  ): { isRangeStart: boolean; isRangeEnd: boolean } => {
    const isInRange = selectedSlots.includes(slot);
    if (!isInRange) return { isRangeStart: false, isRangeEnd: false };

    const rowPosition = index % 4;
    const prevSlot = index > 0 ? periodSlots[index - 1] : null;
    const nextSlot =
      index < periodSlots.length - 1 ? periodSlots[index + 1] : null;

    const isPrevInRange = prevSlot ? selectedSlots.includes(prevSlot) : false;
    const isNextInRange = nextSlot ? selectedSlots.includes(nextSlot) : false;

    const isRangeStart = !isPrevInRange || rowPosition === 0;
    const isRangeEnd = !isNextInRange || rowPosition === 3;

    return { isRangeStart, isRangeEnd };
  };

  return (
    <div className={styles.container} data-testid="timeSlotsSelector">
      <div className={styles.header}>
        <CtaButton
          className={styles.resetButton}
          onClick={() => dispatch(resetTimeSlots())}
          label="Reset Selection"
          isPrimary={false}
          size="small"
          disabled={!startSlot && !endSlot}
        />
      </div>
      {Object.keys(timeSlots).map((period) => (
        <div key={period} className={styles.timeSlotPeriod}>
          <div className={styles.timeSlotButtons}>
            {timeSlots[period as TimeSlotPeriod].map((slot, index) => {
              const isInRange = selectedSlots.includes(slot);
              const isSelected = slot === startSlot || slot === endSlot;
              const rowPosition = index % 4;
              const { isRangeStart, isRangeEnd } = getSlotPositionInRange(
                slot,
                timeSlots[period as TimeSlotPeriod],
                index,
              );

              return (
                <CtaButton
                  key={slot}
                  className={`${styles.timeSlotButton} ${
                    isInRange
                      ? isSelected
                        ? styles.selected
                        : styles.inRange
                      : ""
                  } ${isRangeStart ? styles.rangeStart : ""} ${
                    isRangeEnd ? styles.rangeEnd : ""
                  }`}
                  data-row-position={rowPosition}
                  data-in-range={isInRange}
                  data-is-selected={isSelected}
                  onClick={() => dispatch(toggleSlot(slot))}
                  label={slot}
                  outlined={true}
                  size={buttonSize}
                />
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimeSlotSelector;
