import React from "react";
import serviceCardInfo from "@/components/ServiceCardInfo/serviceCardInfo.module.scss";
import { TiStarHalfOutline } from "react-icons/ti";

const ServiceCardInfo = () => {
  return (
    <div className={serviceCardInfo.service}>
      <h1>Full makeup</h1>
      <div className={serviceCardInfo.service__rate}>
        <TiStarHalfOutline />
        <p>4.5</p>
      </div>
    </div>
  );
};

export default ServiceCardInfo;
