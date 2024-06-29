import React from "react";
import searchBarContent from "@/components/SearchBarContent/searchBarContent.module.scss";
import { GoSearch } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";
import { GoCalendar } from "react-icons/go";
import SearchBarButton from "@/components/Buttons/SearchBarButton/SearchBarButton";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";

interface SearchBarContentProps {
  isLabelClicked: string | null;
  onClick: (label: string) => void;
}

const SearchBarContent: React.FC<SearchBarContentProps> = ({
  isLabelClicked,
  onClick,
}) => {
  return (
    <div className={searchBarContent.container} data-testid="searchBarContent">
      <SearchBarButton
        icon={<GoSearch />}
        label="What"
        isLabelClicked={isLabelClicked}
        onClick={() => onClick("What")}
        dataTestId="searchBarButtonWhat"
      />
      <div className={searchBarContent.separator}></div>
      <SearchBarButton
        icon={<IoLocationOutline />}
        label="Where"
        isLabelClicked={isLabelClicked}
        onClick={() => onClick("Where")}
        dataTestId="searchBarButtonWhere"
      />
      <div className={searchBarContent.separator}></div>
      <SearchBarButton
        icon={<GoCalendar />}
        label="When"
        isLabelClicked={isLabelClicked}
        onClick={() => onClick("When")}
        dataTestId="searchBarButtonWhen"
      />
      <div className={searchBarContent.icon}>
        <HiAdjustmentsHorizontal />
      </div>
    </div>
  );
};

export default SearchBarContent;
