import React, { useState } from "react";
import searchBar from "@/components/SearchBar/searchBar.module.scss";
import { GoSearch } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";
import { GoCalendar } from "react-icons/go";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import Overlay from "@/components/Overlay/Overlay";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SearchButton from "../Buttons/SearchButton/SearchButton";

export interface ISearchBarProps {
  labelWhat: string;
  labelWhere: string;
  labelWhen: string;
}

const SearchBar = (props: ISearchBarProps) => {
  const [isLabelClicked, setIsLabelClicked] = useState<string | null>(null);
  const [isOverlayVisible, setIsOverlayVisible] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  const handleOverlayClose = () => {
    setIsOverlayVisible(false);
  };

  const handleClick = (label: string) => {
    if (label === isLabelClicked) {
      setIsLabelClicked(null);
      if (label === "labelWhen") {
        setIsOverlayVisible(false);
      }
    } else {
      console.log("clicked");
      setIsLabelClicked(label);
      if (label === "labelWhen") {
        setIsOverlayVisible(true);
      }
    }
  };

  return (
    <div className={searchBar.container}>
      <div className={searchBar.search}>
        <div
          className={searchBar.icon}
          onClick={() => handleClick("labelWhat")}
        >
          <GoSearch />
          <p
            className={`${searchBar.label} ${
              isLabelClicked === "labelWhat" ? searchBar.underlined : ""
            }`}
            data-testid={
              isLabelClicked === "labelWhat" ? "underlined-label" : ""
            }
          >
            {props.labelWhat}
          </p>
        </div>
        <div className={searchBar.separator}></div>
        <div
          className={searchBar.icon}
          onClick={() => handleClick("labelWhere")}
        >
          <IoLocationOutline />
          <p
            className={`${searchBar.label} ${
              isLabelClicked === "labelWhere" ? searchBar.underlined : ""
            }`}
            data-testid={
              isLabelClicked === "labelWhere" ? "underlined-label" : ""
            }
          >
            {props.labelWhere}
          </p>
        </div>
        <div className={searchBar.separator}></div>
        <div
          className={searchBar.icon}
          onClick={() => handleClick("labelWhen")}
        >
          <GoCalendar />
          <p
            className={`${searchBar.label} ${
              isLabelClicked === "labelWhen" ? searchBar.underlined : ""
            }`}
            data-testid={
              isLabelClicked === "labelWhen" ? "underlined-label" : ""
            }
          >
            {props.labelWhen}
          </p>
        </div>
      </div>
      <div className={searchBar.icon}>
        <HiAdjustmentsHorizontal />
      </div>

      <Overlay show={isOverlayVisible} onClose={handleOverlayClose}>
        <div className={searchBar.popupContent}>
          <div className={searchBar.popupHeader}>
            {/* <GoSearch />
            <p className={searchBar.label}>{props.labelWhat}</p>
            <IoLocationOutline />
            <p className={searchBar.label}>{props.labelWhere}</p>
            <GoCalendar />
            <p className={searchBar.label}>{props.labelWhen}</p> */}
            <div className={searchBar.search}>
              <div
                className={searchBar.icon}
                onClick={() => handleClick("labelWhat")}
              >
                <GoSearch />
                <p
                  className={`${searchBar.label} ${
                    isLabelClicked === "labelWhat" ? searchBar.underlined : ""
                  }`}
                  data-testid={
                    isLabelClicked === "labelWhat" ? "underlined-label" : ""
                  }
                >
                  {props.labelWhat}
                </p>
              </div>
              <div className={searchBar.separator}></div>
              <div
                className={searchBar.icon}
                onClick={() => handleClick("labelWhere")}
              >
                <IoLocationOutline />
                <p
                  className={`${searchBar.label} ${
                    isLabelClicked === "labelWhere" ? searchBar.underlined : ""
                  }`}
                  data-testid={
                    isLabelClicked === "labelWhere" ? "underlined-label" : ""
                  }
                >
                  {props.labelWhere}
                </p>
              </div>
              <div className={searchBar.separator}></div>
              <div
                className={searchBar.icon}
                onClick={() => handleClick("labelWhen")}
              >
                <GoCalendar />
                <p
                  className={`${searchBar.label} ${
                    isLabelClicked === "labelWhen" ? searchBar.underlined : ""
                  }`}
                  data-testid={
                    isLabelClicked === "labelWhen" ? "underlined-label" : ""
                  }
                >
                  {props.labelWhen}
                </p>
              </div>
            </div>
            <SearchButton label={"Search"} />
          </div>
          <DatePicker
            selected={selectedDate}
            onChange={(date: Date | null) => setSelectedDate(date)}
            inline
          />
        </div>
      </Overlay>
    </div>
  );
};

export default SearchBar;
