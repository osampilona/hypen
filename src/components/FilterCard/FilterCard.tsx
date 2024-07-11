import filterCard from "@/components/FilterCard/filterCard.module.scss";
import { useEffect, useState } from "react";
import SkeletonCardList from "@/components/Skeletons/SkeletonCardList/SkeletonCardList";
import TimeSlotSelector from "@/components/TimeSlotsSelector/TimeSlotsSelector";
import CustomCalendar from "@/components/CustomCalendar/CustomCalendar";
import CategoriesList from "@/components/CategoriesList/CategoriesList";

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

  const categories = [
    "Makeup",
    "Hair",
    "Nails",
    "Skincare",
    "Massage",
    "Spa",
    "Barbershop",
    "Tattoo",
    "Piercing",
    "Hair removal",
    "Facial",
    "Eyelash",
    "Eyebrow",
  ];

  const subCategories = [
    "Full makeup",
    "Partial makeup",
    "Bridal makeup",
    "Special event makeup",
    "Haircut",
    "Hair coloring",
    "Hair styling",
    "Hair treatment",
    "Manicure",
    "Pedicure",
    "Gel nails",
    "Acrylic nails",
    "Nail art",
    "Facial",
    "Body massage",
    "Foot massage",
    "Back massage",
    "Full body massage",
    "Spa day",
    "Spa treatment",
    "Barber haircut",
    "Beard trimming",
    "Beard styling",
    "Tattoo design",
    "Tattoo removal",
    "Piercing",
    "Ear piercing",
    "Nose piercing",
    "Eyebrow waxing",
    "Leg waxing",
    "Arm waxing",
    "Underarm waxing",
    "Bikini waxing",
    "Brazilian waxing",
    "Eyelash extension",
    "Eyebrow tinting",
    "Eyebrow shaping",
  ];

  const handleCategoryClick = (category: string) => {
    console.log("Category clicked:", category);
  };

  const getCategoryLabelForCategory = (category: string) => `${category}`;

  const getCategoryHandlerForCategory = (category: string) => () =>
    handleCategoryClick(category);

  return (
    <div className={filterCard.container} data-testid="filterCard">
      {loading ? (
        <SkeletonCardList skeletonArray={skeletonArray} />
      ) : (
        <>
          <h3>Filters</h3>
          <div className={filterCard.sectionContainer}>
            <CategoriesList
              categoryName="Categories"
              categoriesItems={categories}
              onCategoriesItemClicked={handleCategoryClick}
              getCategoryLabelForCategory={getCategoryLabelForCategory}
              getCategoryHandlerForCategory={getCategoryHandlerForCategory}
              buttonSize="large" // Define the button size here
            />
            <hr />
            <CategoriesList
              categoryName="Sub categories"
              categoriesItems={subCategories}
              onCategoriesItemClicked={handleCategoryClick}
              getCategoryLabelForCategory={getCategoryLabelForCategory}
              getCategoryHandlerForCategory={getCategoryHandlerForCategory}
              buttonSize="small" // Define the button size here
            />
            <hr />
            <CustomCalendar />
            <hr />
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
            <hr />
          </div>
        </>
      )}
    </div>
  );
};

export default FilterCard;
