import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import filterCard from "@/components/FilterCard/filterCard.module.scss";
import SkeletonCardList from "@/components/Skeletons/SkeletonCardList/SkeletonCardList";
import TimeSlotSelector from "@/components/TimeSlotsSelector/TimeSlotsSelector";
import CustomCalendar from "@/components/CustomCalendar/CustomCalendar";
import CategoriesList from "@/components/CategoriesList/CategoriesList";
import {
  CATEGORIES_LIST,
  SUB_CATEGORIES_LIST,
} from "@/types/services/categories";
import { RootState } from "@/lib/store";
import {
  toggleCategory,
  toggleSubCategory,
  setStartSlot,
  setEndSlot,
  setSelectedDate,
} from "@/lib/features/filters/filters";

const FilterCard: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const selectedCategories = useSelector(
    (state: RootState) => state.filters.selectedCategories,
  );
  const selectedSubCategories = useSelector(
    (state: RootState) => state.filters.selectedSubCategories,
  );
  const startSlot = useSelector((state: RootState) => state.filters.startSlot);
  const endSlot = useSelector((state: RootState) => state.filters.endSlot);
  const selectedDate = useSelector(
    (state: RootState) => state.filters.selectedDate,
  );

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleCategoryClick = (category: string) => {
    dispatch(toggleCategory(category));
  };

  const handleSubCategoryClick = (subCategory: string) => {
    dispatch(toggleSubCategory(subCategory));
  };

  const getCategoryLabelForCategory = (category: string) => `${category}`;

  const handleStartSlotChange = (slot: string | null) => {
    dispatch(setStartSlot(slot));
  };

  const handleEndSlotChange = (slot: string | null) => {
    dispatch(setEndSlot(slot));
  };

  const handleDateChange = (date: Date | null) => {
    dispatch(setSelectedDate(date));
  };

  useEffect(() => {
    console.log("Selected categories:", selectedCategories);
  }, [selectedCategories]);

  useEffect(() => {
    console.log("Selected subcategories:", selectedSubCategories);
  }, [selectedSubCategories]);

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
              categoryName="Categories"
              categoriesItems={CATEGORIES_LIST}
              selectedItems={selectedCategories}
              onCategoriesItemClicked={handleCategoryClick}
              getCategoryLabelForCategory={getCategoryLabelForCategory}
              buttonSize="large"
            />
            <hr />
            <CategoriesList
              categoryName="Sub categories"
              categoriesItems={SUB_CATEGORIES_LIST}
              selectedItems={selectedSubCategories}
              onCategoriesItemClicked={handleSubCategoryClick}
              getCategoryLabelForCategory={getCategoryLabelForCategory}
              buttonSize="small"
            />
            <hr />
            <CustomCalendar
              selectedDate={selectedDate}
              onDateChange={handleDateChange}
            />
            <hr />
            <p>
              {startSlot ? (
                endSlot ? (
                  <>
                    From {startSlot} to {endSlot}
                  </>
                ) : (
                  <>From {startSlot} to</>
                )
              ) : (
                <>Select a time range</>
              )}
            </p>
            <TimeSlotSelector
              startSlot={startSlot}
              endSlot={endSlot}
              setStartSlot={handleStartSlotChange}
              setEndSlot={handleEndSlotChange}
            />
            <hr />
          </div>
        </>
      )}
    </div>
  );
};

export default FilterCard;
