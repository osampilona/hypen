import React from "react";
import categoriesList from "@/components/CategoriesList/categoriesList.module.scss";
import CtaButton from "@/components/Buttons/CTAButton/CtaButton";
import { Categories, SubCategories } from "@/types/services/categories";

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
  const handleButtonClick = (category: string) => {
    onCategoriesItemClicked(category);
  };

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
                onClick={() => handleButtonClick(category)}
                size={buttonSize}
                className={`button--secondary ${selectedItems.includes(category) && categoriesList.active}`}
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
