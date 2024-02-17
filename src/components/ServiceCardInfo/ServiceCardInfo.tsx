import React from "react";
import serviceCardInfo from "@/components/ServiceCardInfo/serviceCardInfo.module.scss";
import { TiStarHalfOutline } from "react-icons/ti";

const ServiceCardInfo = () => {
  return (
    <>
      <div className={serviceCardInfo.service}>
        <h1>Full makeup</h1>
        <div className={serviceCardInfo.service__rate}>
          <TiStarHalfOutline />
          <p>4.5</p>
        </div>
      </div>
      <div className={serviceCardInfo.details}>
        <div className={serviceCardInfo.details__days}>
          <p>Mon/Sat</p>
          <div className={serviceCardInfo.details__days__dot}></div>
          <p>9:00-19:00</p>
        </div>
        <p className={serviceCardInfo.details__days__hours}>
          Deposit 30% of the price
        </p>
        <p className={serviceCardInfo.details__days__hours}>
          1.3 km. away from you
        </p>
      </div>
    </>
  );
};

export default ServiceCardInfo;
