import customCalendar from "@/components/CustomCalendar/customCalendar.module.scss";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker, { registerLocale } from "react-datepicker";
import { useState } from "react";
import { enGB } from "date-fns/locale";

registerLocale("en-GB", enGB);

interface CustomCalendarProps {
  // Add your component props here
}

const CustomCalendar: React.FC<CustomCalendarProps> = (props) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  return (
    <div className={customCalendar.container} data-testid="customCalendar">
      <DatePicker
        selected={selectedDate}
        onChange={(date: Date | null) => setSelectedDate(date)}
        className={customCalendar.customDatePicker}
        calendarClassName={customCalendar.customDatePicker}
        locale={"en-GB"}
        inline
      />
    </div>
  );
};

export default CustomCalendar;
