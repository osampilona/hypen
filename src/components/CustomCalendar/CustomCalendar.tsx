import customCalendar from "@/components/CustomCalendar/customCalendar.module.scss";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker, { registerLocale } from "react-datepicker";
import { enGB } from "date-fns/locale";
import { RootState } from "@/lib/store";
import { setSelectedDate } from "@/lib/features/filters/dateSlice"; // Updated import path for setSelectedDate
import { useDispatch, useSelector } from "react-redux";

registerLocale("en-GB", enGB);

interface CustomCalendarProps {
  // Add any additional props here if needed
}

const CustomCalendar: React.FC<CustomCalendarProps> = () => {
  const dispatch = useDispatch();
  const selectedDate = useSelector(
    (state: RootState) => state.date.selectedDate,
  );

  const handleDateChange = (date: Date | null) => {
    dispatch(setSelectedDate(date));
  };

  return (
    <div className={customCalendar.container} data-testid="custom-calendar">
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        className={customCalendar.customDatePicker}
        calendarClassName={customCalendar.customDatePicker}
        locale={"en-GB"}
        inline
      />
    </div>
  );
};

export default CustomCalendar;
