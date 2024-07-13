import customCalendar from "@/components/CustomCalendar/customCalendar.module.scss";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker, { registerLocale } from "react-datepicker";
import { enGB } from "date-fns/locale";

registerLocale("en-GB", enGB);

interface CustomCalendarProps {
  selectedDate: Date | null;
  onDateChange: (date: Date | null) => void;
}

const CustomCalendar: React.FC<CustomCalendarProps> = ({
  selectedDate,
  onDateChange,
}) => {
  return (
    <div className={customCalendar.container} data-testid="custom-calendar">
      <DatePicker
        selected={selectedDate}
        onChange={onDateChange}
        className={customCalendar.customDatePicker}
        calendarClassName={customCalendar.customDatePicker}
        locale={"en-GB"}
        inline
      />
    </div>
  );
};

export default CustomCalendar;
