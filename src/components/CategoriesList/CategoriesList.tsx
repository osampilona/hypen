import React from "react";
import categoriesList from "@/components/CategoriesList/categoriesList.module.scss";
import CtaButton from "@/components/Buttons/CTAButton/CtaButton";

interface CategoriesListProps {
  categoryName: string;
  categoriesItems: string[];
  onCategoriesItemClicked?: (category: string) => void;
  getCategoryLabelForCategory: (category: string) => string;
  getCategoryHandlerForCategory: (category: string) => () => void;
  buttonSize: "micro" | "small" | "medium" | "large";
}

const CategoriesList: React.FC<CategoriesListProps> = ({
  categoryName,
  categoriesItems,
  onCategoriesItemClicked,
  getCategoryLabelForCategory,
  getCategoryHandlerForCategory,
  buttonSize,
}) => {
  return (
    <div className={categoriesList.container} data-testid="categoriesList">
      <h4>{categoryName}</h4>
      <div className={categoriesList["list-container"]}>
        <ul className={categoriesList.list}>
          {categoriesItems.map((category, index) => (
            <li key={index} className={categoriesList.item}>
              <CtaButton
                label={getCategoryLabelForCategory(category)}
                onClick={getCategoryHandlerForCategory(category)}
                isPrimary={false}
                size={buttonSize}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoriesList;
