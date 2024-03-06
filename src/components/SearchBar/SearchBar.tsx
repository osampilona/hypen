import React, { useState } from "react";
import searchBar from "@/components/SearchBar/searchBar.module.scss";
import { GoSearch } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";
import { GoCalendar } from "react-icons/go";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
export interface ISearchBarProps {
  labelWhat: string;
  labelWhere: string;
  labelWhen: string;
}

const SearchBar = (props: ISearchBarProps) => {
  const [isLabelClicked, setIsLabelClicked] = useState<string | null>(null);

  const handleClick = (label: string) => {
    setIsLabelClicked(label === isLabelClicked ? null : label);
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
          >
            {props.labelWhen}
          </p>
        </div>
      </div>
      <div className={searchBar.icon}>
        <HiAdjustmentsHorizontal />
      </div>
    </div>
  );
};

export default SearchBar;
