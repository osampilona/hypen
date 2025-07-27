import customCalendar from "@/components/CustomCalendar/customCalendar.module.scss";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker, { registerLocale } from "react-datepicker";
import { enGB } from "date-fns/locale";
import { RootState } from "@/lib/store";
import { setSelectedDate } from "@/lib/features/filters/dateSlice";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";

registerLocale("en-GB", enGB);

interface CustomCalendarProps {
  categoryName: string;
}

const CustomCalendar: React.FC<CustomCalendarProps> = ({ categoryName }) => {
  const dispatch = useDispatch();
  const selectedDate = useSelector(
    (state: RootState) => state.date.selectedDate,
  );

  // If no date is selected, use today as default
  const today = new Date();
  const parsedDate = selectedDate ? new Date(selectedDate) : today;

  // Set today as default selection on component mount
  useEffect(() => {
    if (!selectedDate) {
      const today = new Date();
      const todayISO = today.toISOString();
      dispatch(setSelectedDate(todayISO));
      // Note: accordion selections will automatically sync via extraReducers
    }
  }, [selectedDate, dispatch]);

  const isPastDate = (date: Date) => {
    const today = new Date();
    return date.getTime() < today.setHours(0, 0, 0, 0);
  };

  const isToday = (date: Date) => {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  const getDayClassName = (date: Date) => {
    if (isPastDate(date)) {
      return customCalendar.pastDate;
    }

    // Only show today styling if no date is selected or if today is the selected date
    if (
      isToday(date) &&
      (!parsedDate || parsedDate.toDateString() === date.toDateString())
    ) {
      return "";
    }

    return "";
  };

  const handleDateChange = (date: Date | null) => {
    dispatch(setSelectedDate(date ? date.toISOString() : null));
    // Note: accordion selections will automatically sync via extraReducers
  };

  return (
    <>
      <h4 className={customCalendar.title}>{categoryName}</h4>
      <div className={customCalendar.container} data-testid="custom-calendar">
        <DatePicker
          selected={parsedDate}
          onChange={handleDateChange}
          className={customCalendar.customDatePicker}
          calendarClassName={customCalendar.customDatePicker}
          locale={"en-GB"}
          inline
          minDate={new Date()} // Disable past dates
          dayClassName={getDayClassName}
        />
      </div>
    </>
  );
};

export default CustomCalendar;
