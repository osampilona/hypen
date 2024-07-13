import React, { useEffect } from "react";
import categoriesList from "@/components/CategoriesList/categoriesList.module.scss";
import CtaButton from "@/components/Buttons/CTAButton/CtaButton";
import { Categories, SubCategories } from "@/types/services/categories";
import { useDispatch, useSelector } from "react-redux";
import { toggleCategory } from "@/lib/features/filters/filters";
import { RootState } from "@/lib/store";

interface CategoriesListProps {
  categoryName: string;
  categoriesItems: Categories[] | SubCategories[];
  selectedItems: string[];
  onCategoriesItemClicked: (category: string) => void;
  getCategoryLabelForCategory: (category: string) => string;
  buttonSize: "micro" | "small" | "medium" | "large";
}

const CategoriesList: React.FC<CategoriesListProps> = ({
  categoryName,
  categoriesItems,
  selectedItems,
  onCategoriesItemClicked,
  getCategoryLabelForCategory,
  buttonSize,
}) => {
  const dispatch = useDispatch();

  const selectedCategories = useSelector(
    (state: RootState) => state.filters.selectedCategories,
  );
  const selectedSubCategories = useSelector(
    (state: RootState) => state.filters.selectedSubCategories,
  );

  useEffect(() => {}, [selectedItems]);

  console.log("rendering child. All categories selected... ", selectedItems);

  return (
    <div className={categoriesList.container} data-testid="categoriesList">
      <h4>{categoryName}</h4>
      <div className={categoriesList["list-container"]}>
        <ul className={categoriesList.list}>
          {categoriesItems.map((category, index) => (
            <li key={index} className={categoriesList.item}>
              <CtaButton
                label={getCategoryLabelForCategory(category)}
                onClick={() => dispatch(toggleCategory(category))}
                size={buttonSize}
                className={`${selectedCategories.includes(category) ? categoriesList.active : "button--secondary"}`}
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
