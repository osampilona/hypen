import React from "react";
import searchButton from "./searchButton.module.scss";
import CtaButton from "../CTAButton/CtaButton";
import search from "@/icons/search.svg";

const SearchButton = () => {
  return (
    <button className={searchButton.button}>
      <CtaButton label="Search" icon={search} buttonType="secondary" />
    </button>
  );
};

export default SearchButton;
