"use client";
import filterCard from "@/components/FilterCard/filterCard.module.scss";
import { useEffect, useState } from "react";
import SkeletonCardList from "@/components/Skeletons/SkeletonCardList/SkeletonCardList";
import TimeSlotSelector from "../TimeSlotsSelector/TimeSlotsSelector";

interface FilterCardProps {
  // Add your component props here
}

const FilterCard: React.FC<FilterCardProps> = (props) => {
  const [loading, setLoading] = useState(true);
  const [startSlot, setStartSlot] = useState<string | null>(null);
  const [endSlot, setEndSlot] = useState<string | null>(null);
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
        </>
      )}
    </div>
  );
};

export default FilterCard;
