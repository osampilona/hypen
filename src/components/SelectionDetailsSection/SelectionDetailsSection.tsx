import React from "react";
import CtaButton from "@/components/Buttons/CTAButton/CtaButton";
import styles from "./selectionDetailsSection.module.scss";

interface SelectionDetailsSectionProps {
  serviceName: string;
  selectedDate?: string;
  selectedTime?: string;
  selectedLocation?: string;
  selectedPriceRange?: string;
  selectedPaymentOptions?: string;
  selectedCategories?: string;
  onBookingClick?: () => void;
  onWishlistClick?: () => void;
}

const SelectionDetailsSection: React.FC<SelectionDetailsSectionProps> = ({
  serviceName,
  selectedDate = "Not selected",
  selectedTime = "Not selected",
  selectedLocation = "Not selected",
  selectedPriceRange = "Not selected",
  selectedPaymentOptions = "Not selected",
  selectedCategories = "Not selected",
  onBookingClick,
  onWishlistClick,
}) => {
  // Check if all required selections are made
  const hasValidDate = selectedDate !== "Not selected";
  const hasValidTime = selectedTime !== "Not selected";
  const canBook = hasValidDate && hasValidTime;

  // Get dynamic button text based on selections
  const getBookingButtonText = () => {
    if (!hasValidDate && !hasValidTime) {
      return "Select date & time";
    }
    if (!hasValidDate) {
      return "Select a date";
    }
    if (!hasValidTime) {
      return "Select a time";
    }
    return "Book a timeslot";
  };

  return (
    <div className={styles.bookingDetails}>
      <div className={styles.selectionSummary}>
        <h3>Your Selection</h3>
        <div className={styles.selectedItems}>
          <div className={styles.selectedDate}>
            <span className={styles.label}>Date:</span>
            <span
              className={`${styles.value} ${!hasValidDate ? styles.notSelected : ""}`}
            >
              {selectedDate}
            </span>
          </div>
          <div className={styles.selectedTime}>
            <span className={styles.label}>Time:</span>
            <span
              className={`${styles.value} ${!hasValidTime ? styles.notSelected : ""}`}
            >
              {selectedTime}
            </span>
          </div>
          <div className={styles.selectedService}>
            <span className={styles.label}>Service:</span>
            <span className={styles.value}>{serviceName}</span>
          </div>
          {selectedLocation !== "Not selected" && (
            <div className={styles.selectedLocation}>
              <span className={styles.label}>Location:</span>
              <span className={styles.value}>{selectedLocation}</span>
            </div>
          )}
          {selectedCategories !== "Not selected" && (
            <div className={styles.selectedCategories}>
              <span className={styles.label}>Category:</span>
              <span className={styles.value}>{selectedCategories}</span>
            </div>
          )}
          {selectedPriceRange !== "Not selected" && (
            <div className={styles.selectedPriceRange}>
              <span className={styles.label}>Price Range:</span>
              <span className={styles.value}>{selectedPriceRange}</span>
            </div>
          )}
          {selectedPaymentOptions !== "Not selected" && (
            <div className={styles.selectedPaymentOptions}>
              <span className={styles.label}>Payment:</span>
              <span className={styles.value}>{selectedPaymentOptions}</span>
            </div>
          )}
        </div>
        <div className={styles.bookingActions}>
          <CtaButton
            label={getBookingButtonText()}
            isPrimary={canBook}
            size="large"
            onClick={onBookingClick}
            disabled={!canBook}
          />
          <button className={styles.wishlistButton} onClick={onWishlistClick}>
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectionDetailsSection;
