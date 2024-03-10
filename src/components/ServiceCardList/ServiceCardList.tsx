"use client";
import React, { useEffect, useState } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";
import SkeletonElement from "../Skeletons/SkeletonElement";
import serviceCardList from "@/components/ServiceCardList/serviceCardList.module.scss";
import { ServiceCardType } from "@/types/services/card";
import { serviceData as initialServiceData } from "@/data/serviceData";

const ServiceCardList = () => {
  const [loading, setLoading] = useState(true);
  const [serviceData, setServiceData] = useState<ServiceCardType[]>([]);
  const skeletonArray = Array.from({ length: 10 }, (_, index) => index + 1);

  useEffect(() => {
    console.log("LOADING:: ", loading);

    const timer = setTimeout(() => {
      setServiceData(initialServiceData);
      setLoading(false);
    }, 60000);

    return () => clearTimeout(timer);
  }, [loading]);

  return (
    <>
      <div className={serviceCardList.container}>
        {loading &&
          skeletonArray.map((index) => (
            <SkeletonElement key={index} type={"card"}>
              <SkeletonElement type="image" />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "80%",
                  justifyContent: "space-between",
                  gap: "1rem",
                  marginLeft: "1rem",
                }}
              >
                <SkeletonElement type="title" />
                <SkeletonElement type="text" />
                <SkeletonElement type="text" />
                <div style={{ display: "flex", alignItems: "center" }}>
                  <SkeletonElement type="avatar" />
                  <SkeletonElement type="detail" />
                </div>
              </div>
            </SkeletonElement>
          ))}
        {serviceData.map((service: ServiceCardType, index: number) => (
          <ServiceCard {...service} key={`${service.serviceName}-${index}`} />
        ))}
      </div>
    </>
  );
};

export default ServiceCardList;
