import React, { useState } from "react";
import searchBar from "@/components/SearchBar/searchBar.module.scss";
import Overlay from "@/components/Overlay/Overlay";
import CustomCalendar from "@/components/CustomCalendar/CustomCalendar";
import CustomInputField from "@/components/CustomInputField/CustomInputField";
import { MdOutlineGpsFixed } from "react-icons/md";
import SearchBarContent from "@/components/SearchBarContent/SearchBarContent";
import { GoSearch } from "react-icons/go";

const SearchBar: React.FC = () => {
  const [isLabelClicked, setIsLabelClicked] = useState<string | null>(null);
  const [isOverlayVisible, setIsOverlayVisible] = useState<boolean>(false);
  const [searchTermWhat, setSearchTermWhat] = useState<string>("");
  const [searchTermWhere, setSearchTermWhere] = useState<string>("");

  const handleOverlayClose = () => {
    setIsOverlayVisible(false);
    setIsLabelClicked(null);
  };

  const handleClick = (label: string) => {
    if (label === isLabelClicked) {
      setIsLabelClicked(null);
      setIsOverlayVisible(false);
    } else {
      setIsLabelClicked(label);
      setIsOverlayVisible(true);
    }
  };

  return (
    <div className={searchBar.container}>
      <SearchBarContent isLabelClicked={isLabelClicked} onClick={handleClick} />

      <Overlay
        show={isOverlayVisible}
        onClose={handleOverlayClose}
        data-testid="overlay-container"
      >
        <div className={searchBar.popupContent}>
          {isLabelClicked === "When" ? (
            <CustomCalendar
              isLabelClicked={isLabelClicked}
              handleClick={handleClick}
            />
          ) : isLabelClicked === "Where" ? (
            <CustomInputField
              isLabelClicked={isLabelClicked}
              handleClick={handleClick}
              leftIcon={<GoSearch />}
              placeholder={"Where"}
              rightIcon={<MdOutlineGpsFixed />}
              value={searchTermWhere}
              onChange={setSearchTermWhere}
            />
          ) : isLabelClicked === "What" ? (
            <CustomInputField
              isLabelClicked={isLabelClicked}
              handleClick={handleClick}
              leftIcon={<GoSearch />}
              placeholder={"What"}
              value={searchTermWhat}
              onChange={setSearchTermWhat}
            />
          ) : null}
        </div>
      </Overlay>
    </div>
  );
};

export default SearchBar;
