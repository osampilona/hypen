import React, { useState } from "react";
import searchBar from "@/components/SearchBar/searchBar.module.scss";
import { GoSearch } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";
import { GoCalendar } from "react-icons/go";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import Overlay from "@/components/Overlay/Overlay";
import CustomCalendar from "@/components/CustomCalendar/CustomCalendar";
import CustomInputField from "@/components/CustomInputField/CustomInputField";
import { MdOutlineGpsFixed } from "react-icons/md";

export interface ISearchBarProps {
  labelWhat: string;
  labelWhere: string;
  labelWhen: string;
}

const SearchBar = (props: ISearchBarProps) => {
  const [isLabelClicked, setIsLabelClicked] = useState<string | null>(null);
  const [isOverlayVisible, setIsOverlayVisible] = useState<boolean>(false);

  const handleOverlayClose = () => {
    setIsOverlayVisible(false);
  };

  const handleClick = (label: string) => {
    if (label === isLabelClicked) {
      setIsLabelClicked(null);
      if (
        label === "labelWhen" ||
        label === "labelWhere" ||
        label === "labelWhat"
      ) {
        setIsOverlayVisible(false);
      }
    } else {
      setIsLabelClicked(label);
      if (
        label === "labelWhen" ||
        label === "labelWhere" ||
        label === "labelWhat"
      ) {
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
          </div>
          {isLabelClicked === "labelWhen" ? (
            <CustomCalendar />
          ) : isLabelClicked === "labelWhere" ? (
            <CustomInputField
              leftIcon={<GoSearch />}
              placeholder={"Where"}
              rightIcon={<MdOutlineGpsFixed />}
            />
          ) : isLabelClicked === "labelWhat" ? (
            <CustomInputField leftIcon={<GoSearch />} placeholder={"What"} />
          ) : null // Add a default component or another condition
          }
        </div>
      </Overlay>
    </div>
  );
};

export default SearchBar;
