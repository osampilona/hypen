import { useEffect, useState } from "react";
import filterCard from "@/components/FilterCard/filterCard.module.scss";
import SkeletonCardList from "@/components/Skeletons/SkeletonCardList/SkeletonCardList";
import TimeSlotSelector from "@/components/TimeSlotsSelector/TimeSlotsSelector";
import CustomCalendar from "@/components/CustomCalendar/CustomCalendar";
import CategoriesList from "@/components/CategoriesList/CategoriesList";

const FilterCard: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={filterCard.container} data-testid="filterCard">
      {loading ? (
        <SkeletonCardList skeletonArray={[1]} />
      ) : (
        <>
          <h3>Filters</h3>
          <div className={filterCard.sectionContainer}>
            <CategoriesList categoryName="Categories" />
            <hr />
            <CategoriesList categoryName="Sub categories" />
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
