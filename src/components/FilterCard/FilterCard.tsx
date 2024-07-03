"use client";
import filterCard from "@/components/FilterCard/filterCard.module.scss";
import { useEffect, useState } from "react";

import SkeletonCardList from "@/components/Skeletons/SkeletonCardList/SkeletonCardList";

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
        <h1>Filter Card</h1>
      )}
    </div>
  );
};

export default FilterCard;
