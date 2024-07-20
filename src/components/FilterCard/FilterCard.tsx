import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import filterCard from "@/components/FilterCard/filterCard.module.scss";
import SkeletonCardList from "@/components/Skeletons/SkeletonCardList/SkeletonCardList";
import TimeSlotSelector from "@/components/TimeSlotsSelector/TimeSlotsSelector";
import CustomCalendar from "@/components/CustomCalendar/CustomCalendar";
import CategoriesList from "@/components/CategoriesList/CategoriesList";
import { RootState } from "@/lib/store";
import Checkbox from "../Checkbox/Checkbox";
import CheckboxItemsList from "../CheckboxItemsList/CheckboxItemsList";

const FilterCard: React.FC = () => {
  const [loading, setLoading] = useState(true);

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

  return (
    <div className={filterCard.container} data-testid="filterCard">
      {loading ? (
        <SkeletonCardList
          skeletonArray={Array.from({ length: 1 }, (_, index) => index + 1)}
        />
      ) : (
        <>
          <h3>Filters</h3>
          <div className={filterCard.sectionContainer}>
            <CategoriesList
              key={`categories-${selectedCategories.join("-")}`}
              categoryName="Categories"
            />
            <CategoriesList
              key={`subcategories-${selectedSubCategories.join("-")}`}
              categoryName="Sub categories"
            />
            <CustomCalendar />
            <TimeSlotSelector />
            <CheckboxItemsList
              title="Ratings"
              description="Find high quality service based on other people's experiences"
              items={["1 star", "2 stars", "3 stars", "4 stars", "5 stars"]}
              requiredItems={["5 stars"]}
            />
            <CheckboxItemsList
              title="Accessibility and facilities"
              items={[
                "Wheelchair accessible for people with dissabilities so they can use the service as well",
                "Elevator",
                "Parking",
                "Toilet",
                "Wi-Fi",
                "English speaking staff",
              ]}
              disabledItems={["Elevator", "Parking", "Toilet"]}
              requiredItems={[
                "Wheelchair accessible for people with dissabilities so they can use the service as well",
                "Wi-Fi",
              ]}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default FilterCard;
