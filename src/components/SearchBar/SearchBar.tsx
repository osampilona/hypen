import React from "react";
import searchBar from "@/components/SearchBar/searchBar.module.scss";

export interface ISearchBarProps {
  labelWhat: string;
  labelWhere: string;
  labelWhen: string;
}

const SearchBar = (props: ISearchBarProps) => {
  return (
    <div className={searchBar.container}>
      <div className={searchBar.search}>
        <div>{props.labelWhat}</div>
        <div>{props.labelWhen}</div>
        <div>{props.labelWhere}</div>
      </div>
      <div>filter</div>
    </div>
  );
};

export default SearchBar;
