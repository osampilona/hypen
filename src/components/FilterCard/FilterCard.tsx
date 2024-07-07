import filterCard from "@/components/FilterCard/filterCard.module.scss";
import { useEffect, useState } from "react";
import SkeletonCardList from "@/components/Skeletons/SkeletonCardList/SkeletonCardList";
import TimeSlotSelector from "@/components/TimeSlotsSelector/TimeSlotsSelector";
import CustomCalendar from "@/components/CustomCalendar/CustomCalendar";

interface FilterCardProps {
  // isVisible: boolean;
  // setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const FilterCard: React.FC<FilterCardProps> = () => {
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
          <div className={filterCard.sectionContainer}>
            <CustomCalendar />
            <TimeSlotSelector
              startSlot={startSlot}
              endSlot={endSlot}
              setStartSlot={setStartSlot}
              setEndSlot={setEndSlot}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default FilterCard;
