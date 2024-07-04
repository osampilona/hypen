"use client";
import filterCard from "@/components/FilterCard/filterCard.module.scss";
import { useEffect, useState } from "react";

import SkeletonCardList from "@/components/Skeletons/SkeletonCardList/SkeletonCardList";
import TimeSelection from "../TimeSelection/TimeSelection";

interface FilterCardProps {
  // Add your component props here
}

const FilterCard: React.FC<FilterCardProps> = (props) => {
  const [loading, setLoading] = useState(true);
  const skeletonArray = Array.from({ length: 1 }, (_, index) => index + 1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [loading]);
  return (
    <div className={filterCard.container} data-testid="filterCard">
      {loading ? (
        <SkeletonCardList skeletonArray={skeletonArray} />
      ) : (
        <>
          <h3>Filters</h3>
          <TimeSelection
            title="Time Selection"
            options={["Morning", "Afternoon", "Evening"]}
          />
        </>
      )}
    </div>
  );
};

export default FilterCard;
