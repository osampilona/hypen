import React from "react";
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
  return (
    <div className={searchBar.container}>
      <div className={searchBar.search}>
        <div className={searchBar.icon}>
          <SearchIcon />
          <p>{props.labelWhat}</p>
        </div>
        <div className={searchBar.separator}></div>
        <div className={searchBar.icon}>
          <LocationIcon />
          <p>{props.labelWhere}</p>
        </div>
        <div className={searchBar.separator}></div>
        <div className={searchBar.icon}>
          <CalendarIcon />
          <p>{props.labelWhen}</p>
        </div>
      </div>
      <div className={searchBar.icon}>
        <FilterIcon />
      </div>
    </div>
  );
};

export default SearchBar;
