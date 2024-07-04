import customTimeSlots from "@/components/CustomTimeSlots/customTimeSlots.module.scss";
import {
  format,
  addMinutes,
  startOfToday,
  setHours,
  setMinutes,
} from "date-fns";
import CtaButton from "../Buttons/CTAButton/CtaButton";

interface CustomTimeSlotsProps {
  timeRange: string;
  onTimeSlotSelect: (time: Date) => void;
}

const CustomTimeSlots: React.FC<CustomTimeSlotsProps> = ({
  timeRange,
  onTimeSlotSelect,
}) => {
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
    <div className={customTimeSlots.container} data-testid="customTimeSlots">
      {timeSlots.map((time, index) => (
        <CtaButton
          key={index}
          label={format(time, "HH:mm")}
          isPrimary={false}
          outlined={true}
          size="small"
          onClick={() => onTimeSlotSelect(time)}
        />
      ))}
    </div>
  );
};

export default CustomTimeSlots;
