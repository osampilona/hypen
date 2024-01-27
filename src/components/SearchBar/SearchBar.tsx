import React, { useState } from "react";
import searchBar from "@/components/SearchBar/searchBar.module.scss";
import FilterIcon from "@/icons/FilterIcon";
import SearchIcon from "@/icons/SearchIcon";
import LocationIcon from "@/icons/LocationIcon";
import CalendarIcon from "@/icons/CalendarIcon";

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
          <SearchIcon />
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
          <LocationIcon />
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
          <CalendarIcon />
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
        <FilterIcon />
      </div>
    </div>
  );
};

export default SearchBar;
