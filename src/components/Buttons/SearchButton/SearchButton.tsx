import React from "react";
import searchButton from "./searchButton.module.scss";
import CtaButton from "../CTAButton/CtaButton";
import searchPurple from "@/icons/search/searchPurple.svg";
import searchWhite from "@/icons/search/searchWhite.svg";

export interface ISearchButtonProps {
  label: string;
  isPrimary?: boolean;
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  backgroundColor?: string;
}

const SearchButton = ({
  label,
  isPrimary,
  size,
  disabled,
  backgroundColor,
}: ISearchButtonProps) => {
  return (
    <>
      <button className={searchButton.button}>
        <CtaButton
          label={label}
          icon={isPrimary ? searchWhite : searchPurple}
          buttonType={isPrimary ? "primary" : "secondary"}
          size={size}
          disabled={disabled}
          backgroundColor={backgroundColor}
        />
      </button>
    </>
  );
};

export default SearchButton;
