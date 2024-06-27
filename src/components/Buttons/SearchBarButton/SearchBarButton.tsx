import React from "react";
import searchBarButton from "@/components/Buttons/SearchBarButton/searchBarButton.module.scss";

interface SearchBarButtonProps {
  icon: React.ReactNode;
  label: string;
  isLabelClicked: string | null;
  onClick: () => void;
  dataTestId: string;
}

const SearchBarButton: React.FC<SearchBarButtonProps> = ({
  icon,
  label,
  isLabelClicked,
  onClick,
  dataTestId,
}) => {
  const activeClass = isLabelClicked === label ? searchBarButton.active : "";

  return (
    <div className={`${searchBarButton.icon} ${activeClass}`} onClick={onClick}>
      {icon}
      <p
        className={`${searchBarButton.label} ${activeClass}`}
        data-testid={dataTestId}
      >
        {label}
      </p>
    </div>
  );
};

export default SearchBarButton;
