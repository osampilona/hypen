import customCalendar from "@/components/CustomCalendar/customCalendar.module.scss";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker, { registerLocale } from "react-datepicker";
import { useState } from "react";
import { enGB } from "date-fns/locale";
import SearchButton from "@/components/Buttons/SearchButton/SearchButton";
import SearchBarContent from "@/components/SearchBarContent/SearchBarContent";

registerLocale("en-GB", enGB);

interface CustomCalendarProps {
  // Add your component props here
  isLabelClicked: string | null;
  handleClick: (label: string) => void;
}

const CustomCalendar: React.FC<CustomCalendarProps> = ({
  isLabelClicked,
  handleClick,
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  return (
    <div className={customCalendar.container} data-testid="customCalendar">
      <div className={customCalendar.popupHeader}>
        <SearchBarContent
          isLabelClicked={isLabelClicked}
          onClick={handleClick}
        />
      </div>
      <DatePicker
        selected={selectedDate}
        onChange={(date: Date | null) => setSelectedDate(date)}
        className={customCalendar.customDatePicker}
        calendarClassName={customCalendar.customDatePicker}
        locale={"en-GB"}
        inline
      />
      <div className={customCalendar.button}>
        <SearchButton isPrimary label={"Search"} />
      </div>
    </div>
  );
};

export default CustomCalendar;
