// FilterCard.tsx
import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./FilterCard.module.scss";
import SkeletonCardList from "@/components/Skeletons/SkeletonCardList/SkeletonCardList";
import TimeSlotSelector from "@/components/TimeSlotsSelector/TimeSlotsSelector";
import CustomCalendar from "@/components/CustomCalendar/CustomCalendar";
import CategoriesList from "@/components/CategoriesList/CategoriesList";
import { RootState } from "@/lib/store";
import CheckboxItemsList from "@/components/Forms/CheckboxItemsList/CheckboxItemsList";
import PriceRangeSlider from "@/components/PriceRangeSlider/PriceRangeSlider";
import LocationSearchInputField from "@/components/Forms/LocationSearchInputField/LocationSearchInputField";
import DistanceRangeSlider from "@/components/DistanceRangeSlider/DistanceRangeSlider";
import {
  setVisibility,
  setValue,
} from "@/lib/features/filters/distanceRangeSlice";
import Accordion from "../Accordion/Accordion";
import CtaButton from "../Buttons/CTAButton/CtaButton";
import FilterActionButtons from "../FilterActionsButtons/FilterActionsButtons";

const accordionItems = [
  {
    title: "Time Slots",
    content: <TimeSlotSelector categoryName="Time range selector" />,
  },
];

interface FilterCardProps {
  onClose: () => void;
}

const FilterCard: React.FC<FilterCardProps> = ({ onClose }) => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const scrollableRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const isDistanceSliderVisible = useSelector(
    (state: RootState) => state.distanceRange.isVisible,
  );
  const selectedCategories = useSelector(
    (state: RootState) => state.categories.selectedCategories,
  );
  const selectedSubCategories = useSelector(
    (state: RootState) => state.categories.selectedSubCategories,
  );

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const scrollable = scrollableRef.current;
    const content = contentRef.current;

    if (scrollable && content) {
      const handleScroll = () => {
        const { scrollTop, clientHeight } = scrollable;
        const scrollBottom = scrollTop + clientHeight;
        const contentHeight = content.clientHeight;

        if (scrollBottom >= contentHeight) {
          scrollable.style.overflowY = "hidden";
        } else {
          scrollable.style.overflowY = "auto";
        }
      };

      scrollable.addEventListener("scroll", handleScroll);
      return () => scrollable.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const handleLocationChange = (location: string) => {
    if (location !== "") {
      dispatch(setVisibility(true));
    } else {
      dispatch(setVisibility(false));
      dispatch(setValue(0));
    }
  };

  if (loading) {
    return (
      <SkeletonCardList
        skeletonArray={Array.from({ length: 1 }, (_, index) => index + 1)}
      />
    );
  }

  return (
    <section
      className={styles.container}
      aria-label="Filter options"
      data-testid="filterCard"
    >
      <div
        className={styles.scrollableSection}
        ref={scrollableRef}
        tabIndex={0}
        role="region"
        aria-label="Scrollable filter options"
      >
        <div className={styles.content} ref={contentRef}>
          <div
            className={styles.groupContainer}
            role="group"
            aria-label="Category selection"
          >
            <CategoriesList
              key={`categories-${selectedCategories.join("-")}`}
              categoryName="Categories"
            />
            <div
              className={`${styles.sliderContainer} ${
                selectedCategories.length > 0 ? styles.show : ""
              }`}
              aria-expanded={selectedCategories.length > 0}
            >
              <CategoriesList
                key={`subcategories-${selectedSubCategories.join("-")}`}
                categoryName="Sub categories"
              />
            </div>
          </div>
          <div
            className={styles.groupContainer}
            role="group"
            aria-label="Location and distance settings"
          >
            <LocationSearchInputField
              categoryName="Location selection"
              onLocationChange={handleLocationChange}
            />
            <div
              className={`${styles.sliderContainer} ${
                isDistanceSliderVisible ? styles.show : ""
              }`}
              aria-expanded={isDistanceSliderVisible}
            >
              <DistanceRangeSlider categoryName="Distance range" />
            </div>
          </div>
          <div
            className={styles.groupContainer}
            role="group"
            aria-label="Price range"
          >
            <PriceRangeSlider categoryName="Price range" />
          </div>
          <div
            className={styles.groupContainer}
            role="group"
            aria-label="Date and time selection"
          >
            <CustomCalendar categoryName="Date picker" />
            <Accordion items={accordionItems} />
          </div>
          <div
            className={styles.groupContainer}
            role="group"
            aria-label="Additional filters"
          >
            <CheckboxItemsList
              title="Ratings"
              description="Find high quality service based on other people's experiences"
              items={["1 star", "2 stars", "3 stars", "4 stars", "5 stars"]}
              requiredItems={["5 stars"]}
            />
            <CheckboxItemsList
              title="Accessibility and facilities"
              items={[
                "Wheelchair accessible for people with disabilities so they can use the service as well",
                "Elevator",
                "Parking",
                "Toilet",
                "Wi-Fi",
                "English speaking staff",
              ]}
              disabledItems={["Elevator", "Parking", "Toilet"]}
              requiredItems={[
                "Wheelchair accessible for people with disabilities so they can use the service as well",
                "Wi-Fi",
              ]}
            />
          </div>
        </div>
      </div>
      <div
        className={styles.fixedSection}
        role="group"
        aria-label="Filter actions"
      >
        {/* MOJA BUBICA <3 */}
        <FilterActionButtons onClose={onClose} />
      </div>
    </section>
  );
};

export default FilterCard;
