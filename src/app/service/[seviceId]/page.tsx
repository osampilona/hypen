"use client";
import React, { useRef, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PhotoGrid from "@/components/PhotoGrid/PhotoGrid";
import CtaButton from "@/components/Buttons/CTAButton/CtaButton";
import SelectionDetailsSection from "@/components/SelectionDetailsSection/SelectionDetailsSection";
import { getRandomImages, getServiceById } from "@/data/serviceData";
import { CardImage } from "@/types/services/card";
import { RootState } from "@/lib/store";
import styles from "./servicePage.module.scss";

const ServicePage = ({ params }: { params: { seviceId: string } }) => {
  const service = getServiceById(params.seviceId);
  const serviceName = service?.serviceName || "Service";
  const images = service?.images || getRandomImages(); // Use service images or fallback to random

  // Redux selectors for dynamic data
  const selectedDate = useSelector(
    (state: RootState) => state.date.selectedDate,
  );
  const startSlot = useSelector(
    (state: RootState) => state.timeSlots.startSlot,
  );
  const endSlot = useSelector((state: RootState) => state.timeSlots.endSlot);

  // Use display summary from filter display (automatically synced)
  const displaySummary = useSelector(
    (state: RootState) => state.filterDisplay.displaySummary,
  );
  const selectedCategories = useSelector(
    (state: RootState) => state.categories.selectedCategories,
  );
  const priceRange = useSelector((state: RootState) => state.priceRange);
  const searchValue = useSelector(
    (state: RootState) => state.input.searchValue,
  );

  const headerRef = useRef<HTMLDivElement>(null);
  const [isStuck, setIsStuck] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Ensure client-side rendering to avoid hydration mismatch
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Format date for display
  const formatDate = (dateString: string | null) => {
    if (!dateString) return "Date not selected";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
    });
  };

  // Safe formatting functions that avoid hydration mismatches
  const getDisplayDate = () => {
    if (!isClient) return "Loading...";
    return displaySummary.date || formatDate(selectedDate);
  };

  const getDisplayTimeSlot = () => {
    if (!isClient) return "Loading...";
    return displaySummary.timeSlot || formatTimeSlots(startSlot, endSlot);
  };

  // Format time slots for display
  const formatTimeSlots = (start: string | null, end: string | null) => {
    if (!start) return "Not selected";
    if (!end) return start;
    return `${start} - ${end}`;
  };

  // Format categories for display
  const formatCategories = (categories: string[]) => {
    if (categories.length === 0) return "Not selected";
    return categories.join(", ");
  };

  // Format price range for display
  const formatPriceRange = (priceState: {
    currentMin: number;
    currentMax: number;
    min: number;
    max: number;
  }) => {
    if (
      priceState.currentMin === priceState.min &&
      priceState.currentMax === priceState.max
    ) {
      return "Not selected";
    }
    return `$${priceState.currentMin} - $${priceState.currentMax}`;
  };

  // Format location from accordion selections or search value
  const formatLocation = () => {
    if (displaySummary.location) {
      return displaySummary.location;
    }
    if (searchValue) {
      return searchValue;
    }
    return "Not selected";
  };

  // Format payment options from accordion selections
  const formatPaymentOptions = () => {
    return displaySummary.paymentOptions || "Not selected";
  };

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        const rect = headerRef.current.getBoundingClientRect();
        // Check if the header is stuck at the top (position top is 0 or very close to 0)
        setIsStuck(rect.top <= 0);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    // Check initial state
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Don't render Redux-dependent content until client-side
  if (!isClient) {
    return (
      <div className={styles.headerSection}>
        <div className={styles.headerLeft}>
          <div className={styles.headerTopRow}>
            <div className={styles.companyInfo}>
              <h1 className={styles.title}>{serviceName}</h1>
              <h2>{service?.companyName}</h2>
            </div>
          </div>
        </div>
        <div className={styles.headerRight}>
          <div className={styles.quickBookingSection}>
            <div className={styles.dateDisplay}>
              <span className={styles.dateValue}>Loading...</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div
        ref={headerRef}
        className={`${styles.headerSection} ${isStuck ? styles.stuck : ""}`}
      >
        <div className={styles.headerLeft}>
          <div className={styles.headerTopRow}>
            <div className={styles.companyInfo}>
              <h1 className={styles.title}>{serviceName}</h1>
              <h2>{service?.companyName}</h2>
            </div>
          </div>
        </div>

        <div className={styles.headerRight}>
          {/* Quick booking section */}
          <div className={styles.quickBookingSection}>
            <div className={styles.dateDisplay}>
              <span className={styles.dateValue}>{getDisplayDate()}</span>
            </div>
            <div className={styles.actionButtons}>
              <CtaButton
                label="Book Appointment"
                isPrimary={true}
                size="large"
                onClick={() => {
                  console.log("Book appointment clicked with:", {
                    selectedDate: getDisplayDate(),
                    service: serviceName,
                  });
                }}
              />
              <CtaButton
                label="Add to Wishlist"
                isPrimary={false}
                size="medium"
                onClick={() => {
                  console.log("Add to wishlist clicked for:", serviceName);
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <main className={styles.main}>
        <div className={styles.container}>
          <SelectionDetailsSection
            serviceName={serviceName}
            selectedDate={getDisplayDate()}
            selectedTime={getDisplayTimeSlot()}
            selectedLocation={formatLocation()}
            selectedCategories={
              displaySummary.categories || formatCategories(selectedCategories)
            }
            selectedPriceRange={
              displaySummary.priceRange || formatPriceRange(priceRange)
            }
            selectedPaymentOptions={formatPaymentOptions()}
            onBookingClick={() => {
              // TODO: Implement booking logic
              console.log("Booking clicked with:", {
                selectedDate: getDisplayDate(),
                selectedTime: getDisplayTimeSlot(),
                selectedLocation: formatLocation(),
                selectedCategories:
                  displaySummary.categories ||
                  formatCategories(selectedCategories),
                selectedPriceRange:
                  displaySummary.priceRange || formatPriceRange(priceRange),
                selectedPaymentOptions: formatPaymentOptions(),
                service: serviceName,
              });
            }}
            onWishlistClick={() => {
              // TODO: Implement wishlist logic
              console.log("Add to wishlist clicked for:", serviceName);
            }}
          />
        </div>
        <div className={styles.photoGridContainer}>
          <PhotoGrid
            images={images.map((img: CardImage) =>
              typeof img.url === "string" ? img.url : img.url.src,
            )}
          />
        </div>
      </main>
    </>
  );
};
export default ServicePage;
