import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import filterCard from "@/components/FilterCard/filterCard.module.scss";
import SkeletonCardList from "@/components/Skeletons/SkeletonCardList/SkeletonCardList";
import TimeSlotSelector from "@/components/TimeSlotsSelector/TimeSlotsSelector";
import CustomCalendar from "@/components/CustomCalendar/CustomCalendar";
import CategoriesList from "@/components/CategoriesList/CategoriesList";
import { RootState } from "@/lib/store";
import Checkbox from "../Checkbox/Checkbox";

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
            {/* <Checkbox label="This is test" />
            <Checkbox label="This is test required" isRequired={true} />
            <Checkbox label="This is test required" isDisabled={true} /> */}
            <CategoriesList
              key={`categories-${selectedCategories.join("-")}`}
              categoryName="Categories"
            />
            <hr />
            <CategoriesList
              key={`subcategories-${selectedSubCategories.join("-")}`}
              categoryName="Sub categories"
            />
            <hr />
            <CustomCalendar />
            <hr />
            <TimeSlotSelector />
            <hr />
          </div>
        </>
      )}
    </div>
  );
};

export default FilterCard;
