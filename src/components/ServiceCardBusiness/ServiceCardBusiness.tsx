import React from "react";
import serviceCardBusiness from "@/components/ServiceCardBusiness/serviceCardBusiness.module.scss";
import { AiOutlineUser } from "react-icons/ai";

const ServiceCardBusiness = () => {
  return (
    <div className={serviceCardBusiness.business}>
      <div className={serviceCardBusiness.business__left}>
        <div className={serviceCardBusiness.business__left__image}>
          <AiOutlineUser size={24} />
        </div>
        <div className={serviceCardBusiness.business__left__details}>
          <h1>Chiaroscuro salon</h1>
          <p>Hannemanns Alle 4A, st.3</p>
        </div>
      </div>
      <p className={serviceCardBusiness.business__follow}>Follow</p>
    </div>
  );
};

export default ServiceCardBusiness;
