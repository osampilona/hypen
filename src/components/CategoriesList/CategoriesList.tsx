import React from "react";
import { useDispatch, useSelector } from "react-redux";
import categoriesList from "@/components/CategoriesList/categoriesList.module.scss";
import CtaButton from "@/components/Buttons/CTAButton/CtaButton";
import {
  toggleCategory,
  toggleSubCategory,
} from "@/lib/features/filters/filters";
import { RootState } from "@/lib/store";
import {
  CATEGORIES_LIST,
  SUB_CATEGORIES_LIST,
} from "@/types/services/categories";

interface CategoriesListProps {
  categoryName: "Categories" | "Sub categories";
  buttonSize: "micro" | "small" | "medium" | "large";
}

const CategoriesList: React.FC<CategoriesListProps> = ({
  categoryName,
  buttonSize,
}) => {
  const dispatch = useDispatch();

  // Determine which list to use based on the category name
  const categoriesItems =
    categoryName === "Categories" ? CATEGORIES_LIST : SUB_CATEGORIES_LIST;

  const selectedItems = useSelector((state: RootState) =>
    categoryName === "Categories"
      ? state.filters.selectedCategories
      : state.filters.selectedSubCategories,
  );

  const handleCategoryClick = (category: string) => {
    if (categoryName === "Categories") {
      dispatch(toggleCategory(category));
    } else {
      dispatch(toggleSubCategory(category));
    }
  };

  const getCategoryLabelForCategory = (category: string) => `${category}`;

  return (
    <div className={categoriesList.container} data-testid="categoriesList">
      <h4>{categoryName}</h4>
      <div className={categoriesList["list-container"]}>
        <ul className={categoriesList.list}>
          {categoriesItems.map((category, index) => (
            <li key={index} className={categoriesList.item}>
              <CtaButton
                label={getCategoryLabelForCategory(category)}
                onClick={() => handleCategoryClick(category)}
                size={buttonSize}
                className={`${selectedItems.includes(category) ? categoriesList.active : "button--secondary"}`}
                isPrimary={false}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoriesList;
