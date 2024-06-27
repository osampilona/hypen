// SearchBarContent.tsx
import React from "react";
import searchBarContent from "@/components/SearchBarContent/SearchBarContent.module.scss";
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
    <div className={searchBarContent.container}>
      <SearchBarButton
        icon={<GoSearch />}
        label="What"
        isLabelClicked={isLabelClicked}
        onClick={() => onClick("What")}
        dataTestId="What"
      />
      <div className={searchBarContent.separator}></div>
      <SearchBarButton
        icon={<IoLocationOutline />}
        label="Where"
        isLabelClicked={isLabelClicked}
        onClick={() => onClick("Where")}
        dataTestId="Where"
      />
      <div className={searchBarContent.separator}></div>
      <SearchBarButton
        icon={<GoCalendar />}
        label="When"
        isLabelClicked={isLabelClicked}
        onClick={() => onClick("When")}
        dataTestId="When"
      />
      <div className={searchBarContent.icon}>
        <HiAdjustmentsHorizontal />
      </div>
    </div>
  );
};

export default SearchBarContent;
