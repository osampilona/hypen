import React from "react";
import ServiceCard from "../ServiceCard/ServiceCard";
import serviceCardList from "@/components/ServiceCardList/serviceCardList.module.scss";

const ServiceCardList = () => {
  const serviceCardArray = Array.from({ length: 40 }, (_, index) => index + 1);

  return (
    <div className={serviceCardList.container}>
      {serviceCardArray.map((_, index) => {
        return <ServiceCard key={index} />;
      })}
    </div>
  );
};

export default ServiceCardList;
