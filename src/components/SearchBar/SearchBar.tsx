import React from "react";
import searchBar from "@/components/SearchBar/searchBar.module.scss";
import FilterIcon from "@/icons/FilterIcon";
import Search from "@/icons/Search";

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
          <Search />
          {props.labelWhat}
        </div>
        <div>{props.labelWhen}</div>
        <div>{props.labelWhere}</div>
      </div>
      <FilterIcon />
    </div>
  );
};

export default SearchBar;
