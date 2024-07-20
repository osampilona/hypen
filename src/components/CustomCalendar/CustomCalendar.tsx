import customCalendar from "@/components/CustomCalendar/customCalendar.module.scss";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker, { registerLocale } from "react-datepicker";
import { enGB } from "date-fns/locale";
import { RootState } from "@/lib/store";
import { setSelectedDate } from "@/lib/features/filters/dateSlice";
import { useDispatch, useSelector } from "react-redux";

registerLocale("en-GB", enGB);

const CustomCalendar: React.FC = () => {
  const dispatch = useDispatch();
  const selectedDate = useSelector(
    (state: RootState) => state.date.selectedDate,
  );
  const parsedDate = selectedDate ? new Date(selectedDate) : null;

  const isPastDate = (date: Date) => {
    const today = new Date();
    return date.getTime() < today.setHours(0, 0, 0, 0);
  };

  return (
    <div className={customCalendar.container} data-testid="custom-calendar">
      <DatePicker
        selected={parsedDate}
        onChange={(date) =>
          dispatch(setSelectedDate(date ? date.toISOString() : null))
        }
        className={customCalendar.customDatePicker}
        calendarClassName={customCalendar.customDatePicker}
        locale={"en-GB"}
        inline
        minDate={new Date()} // Disable past dates
        dayClassName={(date) =>
          isPastDate(date) ? customCalendar.pastDate : ""
        } // Apply custom class for past dates
      />
    </div>
  );
};

export default CustomCalendar;
