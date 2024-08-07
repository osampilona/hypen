import React from "react";
import checkboxItemsList from "@/components/Forms/CheckboxItemsList/checkboxItemsList.module.scss";
import Checkbox from "@/components/Forms/Checkbox/Checkbox";

interface CheckboxItemsListProps {
  title: string;
  items: string[];
  requiredItems?: string[];
  onItemClicked?: () => void;
  description?: string;
  disabledItems?: string[];
}

const CheckboxItemsList: React.FC<CheckboxItemsListProps> = ({
  title,
  items,
  requiredItems = [],
  description,
  disabledItems = [],
}) => {
  return (
    <ul className={checkboxItemsList.container} data-testid="checkboxItemsList">
      <h4>{title}</h4>
      {description && <small>{description}</small>}
      {items.map((item, index) => (
        <li key={index} className={checkboxItemsList.item}>
          <Checkbox
            label={item}
            id={`checkbox-${title}-${index}`}
            isRequired={requiredItems.includes(item)}
            isDisabled={disabledItems.includes(item)}
          />
        </li>
      ))}
    </ul>
  );
};

export default CheckboxItemsList;
