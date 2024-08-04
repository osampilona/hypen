import React from "react";
import { useSelector, useDispatch } from "react-redux";
import filterCard from "@/components/FilterCard/filterCard.module.scss";
import TimeSlotSelector from "@/components/TimeSlotsSelector/TimeSlotsSelector";
import CustomCalendar from "@/components/CustomCalendar/CustomCalendar";
import CategoriesList from "@/components/CategoriesList/CategoriesList";
import { RootState } from "@/lib/store";
import CheckboxItemsList from "@/components/Forms/CheckboxItemsList/CheckboxItemsList";
import PriceRangeSlider from "@/components/PriceRangeSlider/PriceRangeSlider";
import LocationSearchInputField from "@/components/Forms/LocationSearchInputField/LocationSearchInputField";
import DistanceRangeSlider from "@/components/DistanceRangeSlider/DistanceRangeSlider";
import {
  setVisibility,
  setValue,
} from "@/lib/features/filters/distanceRangeSlice";

const FilterCard: React.FC = () => {
  const dispatch = useDispatch();
  const isDistanceSliderVisible = useSelector(
    (state: RootState) => state.distanceRange.isVisible,
  );
  const selectedCategories = useSelector(
    (state: RootState) => state.categories.selectedCategories,
  );
  const selectedSubCategories = useSelector(
    (state: RootState) => state.categories.selectedSubCategories,
  );

  const handleLocationChange = (location: string) => {
    if (location !== "") {
      dispatch(setVisibility(true));
    } else {
      dispatch(setVisibility(false));
      dispatch(setValue(0)); // Reset the slider value to 0 (or your preferred initial value)
    }
  };
  return (
    <div className={filterCard.container} data-testid="filterCard">
      <div className={filterCard.sectionContainer}>
        <div className={filterCard.groupContainer}>
          <CategoriesList
            key={`categories-${selectedCategories.join("-")}`}
            categoryName="Categories"
          />
          <div
            className={`${filterCard.sliderContainer} ${
              selectedCategories.length > 0 ? filterCard.show : ""
            }`}
          >
            <CategoriesList
              key={`subcategories-${selectedSubCategories.join("-")}`}
              categoryName="Sub categories"
            />
          </div>
        </div>
        <div className={filterCard.groupContainer}>
          <LocationSearchInputField
            categoryName="Location selection"
            onLocationChange={handleLocationChange}
          />
          <div
            className={`${filterCard.sliderContainer} ${
              isDistanceSliderVisible ? filterCard.show : ""
            }`}
          >
            <DistanceRangeSlider categoryName="Distance range" />
          </div>
        </div>
        <div className={filterCard.groupContainer}>
          <PriceRangeSlider categoryName="Price range" />
        </div>
        <div className={filterCard.groupContainer}>
          <CustomCalendar categoryName="Date picker" />
          <TimeSlotSelector categoryName="Time range selector" />
        </div>
        <div className={filterCard.groupContainer}>
          <CheckboxItemsList
            title="Ratings"
            description="Find high quality service based on other people's experiences"
            items={["1 star", "2 stars", "3 stars", "4 stars", "5 stars"]}
            requiredItems={["5 stars"]}
          />
          <CheckboxItemsList
            title="Accessibility and facilities"
            items={[
              "Wheelchair accessible for people with disabilities so they can use the service as well",
              "Elevator",
              "Parking",
              "Toilet",
              "Wi-Fi",
              "English speaking staff",
            ]}
            disabledItems={["Elevator", "Parking", "Toilet"]}
            requiredItems={[
              "Wheelchair accessible for people with disabilities so they can use the service as well",
              "Wi-Fi",
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default FilterCard;
