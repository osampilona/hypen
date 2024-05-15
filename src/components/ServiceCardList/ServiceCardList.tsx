"use client";
import React, { useEffect, useState } from "react";
import ServiceCard from "@/components/ServiceCard/ServiceCard";
import SkeletonCardList from "@/components/Skeletons/SkeletonCardList/SkeletonCardList"; // Import the new component
import { ServiceCardType } from "@/types/services/card";
import { serviceData as initialServiceData } from "@/data/serviceData";
import serviceCardList from "@/components/ServiceCardList/serviceCardList.module.scss";

const ServiceCardList = () => {
  const [loading, setLoading] = useState(true);
  const [serviceData, setServiceData] = useState<ServiceCardType[]>([]);
  const skeletonArray = Array.from({ length: 10 }, (_, index) => index + 1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setServiceData(initialServiceData);
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [loading]);

  return (
    <div className={serviceCardList.container} data-testid="service-card-list">
      {loading ? (
        <SkeletonCardList skeletonArray={skeletonArray} />
      ) : (
        serviceData.map((service: ServiceCardType, index: number) => (
          <ServiceCard {...service} key={`${service.serviceName}-${index}`} />
        ))
      )}
    </div>
  );
};

export default ServiceCardList;
