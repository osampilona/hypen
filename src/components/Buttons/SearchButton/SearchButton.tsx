import React from "react";
import searchButton from "@/components/Buttons/SearchButton/searchButton.module.scss";
import CtaButton from "@/components/Buttons/CTAButton/CtaButton";
import { GoSearch } from "react-icons/go";

export interface ISearchButtonProps {
  label: string;
  isPrimary?: boolean;
  size?: "small" | "medium" | "large";
  disabled?: boolean;
}

const SearchButton = ({
  label,
  isPrimary,
  size,
  disabled,
}: ISearchButtonProps) => {
  return (
    <button className={searchButton.button}>
      <CtaButton
        label={label}
        icon={<GoSearch />}
        isPrimary={isPrimary}
        size={size}
        disabled={disabled}
        data-testid="SearchButton"
      />
    </button>
  );
};

export default SearchButton;
