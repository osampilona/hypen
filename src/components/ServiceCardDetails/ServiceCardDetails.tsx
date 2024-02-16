import React from "react";
import serviceCardDetails from "@/components/ServiceCardDetails/serviceCardDetails.module.scss";

const ServiceCardDetails = () => {
  return (
    <div className={serviceCardDetails.details}>
      <div className={serviceCardDetails.details__days}>
        <p>Mon/Sat</p>
        <div className={serviceCardDetails.details__days__dot}></div>
        <p>9:00-19:00</p>
      </div>
      <p className={serviceCardDetails.details__days__hours}>
        Deposit 30% of the price
      </p>
      <p className={serviceCardDetails.details__days__hours}>
        1.3 km. away from you
      </p>
    </div>
  );
};

export default ServiceCardDetails;
