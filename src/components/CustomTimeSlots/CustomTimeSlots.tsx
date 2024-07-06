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
  isAfter,
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
    if (!startSlot || (startSlot && endSlot)) {
      onStartSlotSelect(time);
      onTimeSlotSelect([time]); // Clear the previous selection
    } else if (startSlot && !endSlot) {
      if (isBefore(startSlot, time)) {
        onTimeSlotSelect([startSlot, time]);
      } else {
        onTimeSlotSelect([time, startSlot]);
      }
    }
  };

  const calculateOverlayStyle = () => {
    if (!startSlot || !endSlot) {
      return { mainOverlay: {}, additionalOverlays: [] };
    }

    const startIndex = timeSlots.findIndex((time) =>
      isSameMinute(time, startSlot),
    );
    const endIndex = timeSlots.findIndex((time) => isSameMinute(time, endSlot));

    if (startIndex === -1 || endIndex === -1) {
      return { mainOverlay: {}, additionalOverlays: [] };
    }

    const columnWidth = 100 / 4; // Assuming 4 columns
    const rowHeight = 30; // Height of each time slot button
    const overlayHeight = rowHeight * 1; // Increase overlay height
    const margin = 2.5; // Margin around the buttons
    const extraMargin = 1.5; // Reduce extra margin to separate rows

    const startColumn = startIndex % 4;
    const endColumn = endIndex % 4;
    const startRow = Math.floor(startIndex / 4);
    const endRow = Math.floor(endIndex / 4);

    const topOffset =
      startRow * (rowHeight + margin * 2) + rowHeight * 0 - margin; // Center the overlay vertically
    const height = overlayHeight + margin * 2;

    let width = columnWidth * (4 - startColumn);
    if (startRow === endRow) {
      width = columnWidth * (endColumn - startColumn + 1);
    }

    const additionalOverlays: {
      top: string;
      left: string;
      height: string;
      width: string;
    }[] = [];

    if (startRow !== endRow) {
      for (let row = startRow + 1; row <= endRow; row++) {
        const isLastRow = row === endRow;
        additionalOverlays.push({
          top: `${
            row * (rowHeight + margin * 2) +
            (row - 1) * extraMargin +
            (isLastRow ? 0.5 : 0) // Add extra offset for the last row
          }px`, // Center the overlay vertically
          left: "calc(-2% + 4px - 4px)", // Added extra padding on the left side and shift left by 2px
          height: `${overlayHeight + margin * 2}px`,
          width: `calc(${isLastRow ? (endColumn + 1) * columnWidth : 100}% + ${
            isLastRow ? 5 : 8
          }px)`, // Adjusted width calculation for all rows
        });
      }
    }

    return {
      mainOverlay: {
        top: `${topOffset}px`,
        left: `calc(${startColumn * columnWidth}% - 4px - 2px)`, // Adjusted padding to the left for the first row and shift left by 2px
        height: `${height}px`,
        width: `calc(${width}% + ${margin * 1}px + 7px)`, // Add a little more width for the first row
      },
      additionalOverlays,
    };
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
              ? styles.selected
              : ""
          }`}
        />
      ))}
    </div>
  );
};

export default CustomTimeSlots;
