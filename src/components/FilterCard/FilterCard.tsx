import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import filterCard from "@/components/FilterCard/filterCard.module.scss";
import SkeletonCardList from "@/components/Skeletons/SkeletonCardList/SkeletonCardList";
import TimeSlotSelector from "@/components/TimeSlotsSelector/TimeSlotsSelector";
import CustomCalendar from "@/components/CustomCalendar/CustomCalendar";
import CategoriesList from "@/components/CategoriesList/CategoriesList";
import CheckboxItemsList from "@/components/Forms/CheckboxItemsList/CheckboxItemsList";
import PriceRangeSlider from "@/components/PriceRangeSlider/PriceRangeSlider";
import LocationSearchInputField from "@/components/Forms/LocationSearchInputField/LocationSearchInputField";
import DistanceRangeSlider from "@/components/DistanceRangeSlider/DistanceRangeSlider";
import { RootState } from "@/lib/store";
import { setVisibility } from "@/lib/features/filters/distanceRangeSlice";

const FilterCard: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const isDistanceSliderVisible = useSelector(
    (state: RootState) => state.distanceRange.isVisible,
  );
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);
  const selectedCategories = useSelector(
    (state: RootState) => state.categories.selectedCategories,
  );
  const selectedSubCategories = useSelector(
    (state: RootState) => state.categories.selectedSubCategories,
  );

  const handleLocationChange = (location: string) => {
    if (location !== "" && !isDistanceSliderVisible) {
      dispatch(setVisibility(true));
    }
  };

  return (
    <div className={filterCard.container} data-testid="filterCard">
      {loading ? (
        <SkeletonCardList
          skeletonArray={Array.from({ length: 1 }, (_, index) => index + 1)}
        />
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};

export default FilterCard;
