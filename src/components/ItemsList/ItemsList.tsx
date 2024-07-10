import itemsList from "@/components/ItemsList/itemsList.module.scss";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

interface ItemsListProps {
  items: { text: string; href: string }[];
  onItemClicked?: () => void;
}

const ItemsList: React.FC<ItemsListProps> = ({ items, onItemClicked }) => {
  return (
    <ul className={itemsList.container} data-testid="ItemsList">
      {items.map((item, index) => (
        <li key={index} onClick={onItemClicked} className={itemsList.item}>
          <Link href={item.href}>{item.text}</Link>
          <IoIosArrowForward />
        </li>
      ))}
    </ul>
  );
};

export default ItemsList;
