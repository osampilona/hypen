import React, { useEffect, useState } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";
import serviceCardList from "@/components/ServiceCardList/serviceCardList.module.scss";
import { ServiceCardType } from "@/types/services/card";
import { serviceData } from "@/data/serviceData";

const ServiceCardList = async () => {
  // const serviceData = Array.from({ length: 2 }, (_, index) => index + 1);
  // const [serviceDataFromBackend, setServiceDataFromBackend] = useState<ServiceCardType[]>([]);

  // // Call backend for data
  // useEffect(() => {
  //   fetch("http://localhost:3000/api/serviceData")
  //     .then((response) => response.json())
  //     .then((data) => setServiceDataFromBackend(data))
  // },[])
  // }

  // 3 states possible:
  // 1. Loading
  // 2. Error
  // 3. Data
  return (
    <div className={serviceCardList.container}>
      {serviceData.map((service: ServiceCardType, index: number) => (
        <ServiceCard {...service} key={`${service.serviceName}-${index}`} />
      ))}
    </div>
  );
};

export default ServiceCardList;
