import React from "react";
import { useDispatch } from "react-redux";
import styles from "@/components/FilterActionsButtons/filterActionsButtons.module.scss";
import CtaButton from "@/components/Buttons/CTAButton/CtaButton";
// Import actions from all slices
import {
  resetCategories,
  resetSubCategories,
} from "@/lib/features/filters/categoriesSlice";
import { resetCheckboxes } from "@/lib/features/filters/checkboxSlice";
import { setSelectedDate } from "@/lib/features/filters/dateSlice";
import {
  setValue,
  setVisibility,
} from "@/lib/features/filters/distanceRangeSlice";
import { setSearchValue } from "@/lib/features/filters/inputSlice";
import { resetPriceRange } from "@/lib/features/filters/priceRangeSlice";
import {
  setStartSlot,
  setEndSlot,
} from "@/lib/features/filters/timeSlotsSlice";

interface FilterActionButtonsProps {
  onClose: () => void;
}

const FilterActionButtons: React.FC<FilterActionButtonsProps> = ({
  onClose,
}) => {
  const dispatch = useDispatch();

  const handleClearAll = () => {
    // Reset all filters
    dispatch(resetCategories());
    dispatch(resetSubCategories());
    dispatch(resetCheckboxes());
    dispatch(setSelectedDate(null));
    dispatch(setVisibility(false));
    dispatch(setValue(0));
    dispatch(setSearchValue(""));
    dispatch(resetPriceRange());
    dispatch(setStartSlot(null));
    dispatch(setEndSlot(null));
  };

  const handleSearch = () => {
    // Here you would typically dispatch an action to trigger the search
    // For now, we'll just close the FilterCard
    onClose();
  };

  return (
    <div className={styles.container}>
      <CtaButton
        label={"Clear all filters"}
        isPrimary={false}
        size={"large"}
        aria-label="Clear all filters"
        onClick={handleClearAll}
      />
      <CtaButton
        label={"Search"}
        size={"large"}
        aria-label="Apply filters"
        onClick={handleSearch}
      />
    </div>
  );
};

export default FilterActionButtons;
