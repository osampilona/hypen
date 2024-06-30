import React from "react";
import searchBarButton from "@/components/Buttons/SearchBarButton/searchBarButton.module.scss";

export interface ISearchBarButtonProps {
  icon: React.ReactNode;
  label: string;
  isLabelClicked: boolean;
  onClick: () => void;
  dataTestId: string;
}

const SearchBarButton: React.FC<ISearchBarButtonProps> = ({
  icon,
  label,
  isLabelClicked,
  onClick,
  dataTestId,
}) => {
  const activeClass = isLabelClicked && searchBarButton.active;

  return (
    <div
      className={`${searchBarButton.icon} ${activeClass}`}
      onClick={onClick}
      data-testid={dataTestId}
    >
      {icon}
      <p className={`${searchBarButton.label} ${activeClass}`}>{label}</p>
    </div>
  );
};

export default SearchBarButton;
