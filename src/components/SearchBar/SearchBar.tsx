import React, { useState } from "react";
import searchBar from "@/components/SearchBar/searchBar.module.scss";
import { GoSearch } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";
import { GoCalendar } from "react-icons/go";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import Overlay from "@/components/Overlay/Overlay";
import CustomCalendar from "@/components/CustomCalendar/CustomCalendar";
import CustomInputField from "@/components/CustomInputField/CustomInputField";
import { MdOutlineGpsFixed } from "react-icons/md";
import SearchBarButton from "@/components/Buttons/SearchBarButton/SearchBarButton";

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

  const renderContent = () => {
    switch (isLabelClicked) {
      case "When":
        return <CustomCalendar />;
      case "Where":
        return (
          <CustomInputField
            leftIcon={<GoSearch />}
            placeholder={"Where"}
            rightIcon={<MdOutlineGpsFixed />}
            value={searchTermWhere}
            onChange={setSearchTermWhere}
          />
        );
      case "What":
        return (
          <CustomInputField
            leftIcon={<GoSearch />}
            placeholder={"What"}
            value={searchTermWhat}
            onChange={setSearchTermWhat}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className={searchBar.container}>
      <div className={searchBar.search}>
        <SearchBarButton
          icon={<GoSearch />}
          label="What"
          isLabelClicked={isLabelClicked}
          onClick={() => handleClick("What")}
          dataTestId="What"
        />
        <div className={searchBar.separator}></div>
        <SearchBarButton
          icon={<IoLocationOutline />}
          label="Where"
          isLabelClicked={isLabelClicked}
          onClick={() => handleClick("Where")}
          dataTestId="Where"
        />
        <div className={searchBar.separator}></div>
        <SearchBarButton
          icon={<GoCalendar />}
          label="When"
          isLabelClicked={isLabelClicked}
          onClick={() => handleClick("When")}
          dataTestId="When"
        />
      </div>
      <div className={searchBar.icon}>
        <HiAdjustmentsHorizontal />
      </div>

      <Overlay show={isOverlayVisible} onClose={handleOverlayClose}>
        <div className={searchBar.popupContent}>
          <div className={searchBar.popupHeader}>
            <div className={searchBar.search}>
              <SearchBarButton
                icon={<GoSearch />}
                label="What"
                isLabelClicked={isLabelClicked}
                onClick={() => handleClick("What")}
                dataTestId="What"
              />
              <div className={searchBar.separator}></div>
              <SearchBarButton
                icon={<IoLocationOutline />}
                label="Where"
                isLabelClicked={isLabelClicked}
                onClick={() => handleClick("Where")}
                dataTestId="Where"
              />
              <div className={searchBar.separator}></div>
              <SearchBarButton
                icon={<GoCalendar />}
                label="When"
                isLabelClicked={isLabelClicked}
                onClick={() => handleClick("When")}
                dataTestId="When"
              />
            </div>
            <div className={searchBar.icon}>
              <HiAdjustmentsHorizontal />
            </div>
          </div>
          {renderContent()}
        </div>
      </Overlay>
    </div>
  );
};

export default SearchBar;
