import filterCard from "@/components/FilterCard/filterCard.module.scss";
import { useEffect, useState } from "react";
import { RootState } from "@/lib/store";
import {
  toggleCategory,
  toggleSubCategory,
} from "@/lib/features/filters/filters";
import SkeletonCardList from "@/components/Skeletons/SkeletonCardList/SkeletonCardList";
import TimeSlotSelector from "@/components/TimeSlotsSelector/TimeSlotsSelector";
import CustomCalendar from "@/components/CustomCalendar/CustomCalendar";
import CategoriesList from "@/components/CategoriesList/CategoriesList";
import {
  CATEGORIES_LIST,
  SUB_CATEGORIES_LIST,
} from "@/types/services/categories";
import { useDispatch, useSelector } from "react-redux";

interface FilterCardProps {
  // isVisible: boolean;
  // setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const FilterCard: React.FC<FilterCardProps> = () => {
  const [loading, setLoading] = useState(true);
  const [startSlot, setStartSlot] = useState<string | null>(null);
  const [endSlot, setEndSlot] = useState<string | null>(null);
  const dispatch = useDispatch();
  const selectedCategories = useSelector(
    (state: RootState) => state.filters.selectedCategories,
  );
  const selectedSubCategories = useSelector(
    (state: RootState) => state.filters.selectedSubCategories,
  );
  const skeletonArray = Array.from({ length: 1 }, (_, index) => index + 1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleCategoryClick = (category: string) => {
    dispatch(toggleCategory(category));
  };

  const handleSubCategoryClick = (subCategory: string) => {
    dispatch(toggleSubCategory(subCategory));
  };

  const getCategoryLabelForCategory = (category: string) => `${category}`;

  useEffect(() => {
    console.log("Selected categories:", selectedCategories); // Log selected categories
  }, [selectedCategories]);

  useEffect(() => {
    console.log("Selected subcategories:", selectedSubCategories); // Log selected subcategories
  }, [selectedSubCategories]);

  return (
    <div className={filterCard.container} data-testid="filterCard">
      {loading ? (
        <SkeletonCardList skeletonArray={skeletonArray} />
      ) : (
        <>
          <h3>Filters</h3>
          <div className={filterCard.sectionContainer}>
            <CategoriesList
              categoryName="Categories"
              categoriesItems={CATEGORIES_LIST}
              selectedItems={selectedCategories} // Pass selected categories
              onCategoriesItemClicked={handleCategoryClick} // Handle category clicks
              getCategoryLabelForCategory={getCategoryLabelForCategory}
              buttonSize="large" // Define the button size here
            />
            <hr />
            <CategoriesList
              categoryName="Sub categories"
              categoriesItems={SUB_CATEGORIES_LIST}
              selectedItems={selectedSubCategories} // Pass selected subcategories
              onCategoriesItemClicked={handleSubCategoryClick} // Handle subcategory clicks
              getCategoryLabelForCategory={getCategoryLabelForCategory}
              buttonSize="small" // Define the button size here
            />
            <hr />
            <CustomCalendar />
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
              setStartSlot={setStartSlot}
              setEndSlot={setEndSlot}
            />
            <hr />
          </div>
        </>
      )}
    </div>
  );
};

export default FilterCard;
