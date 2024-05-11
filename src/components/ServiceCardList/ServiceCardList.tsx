"use client";
import React, { useEffect, useState } from "react";
import ServiceCard from "@/components/ServiceCard/ServiceCard";
import SkeletonCard from "@/components/Skeletons/SkeletonCard/SkeletonCard";
import Shimmer from "../Skeletons/Shimmer/Shimmer";
import serviceCardList from "@/components/ServiceCardList/serviceCardList.module.scss";
import { ServiceCardType } from "@/types/services/card";
import { serviceData as initialServiceData } from "@/data/serviceData";

const ServiceCardList = () => {
  const [loading, setLoading] = useState(true);
  const [serviceData, setServiceData] = useState<ServiceCardType[]>([]);
  const skeletonArray = Array.from({ length: 10 }, (_, index) => index + 1);

  // window.scrollTo(0, 0);
  useEffect(() => {
    const timer = setTimeout(() => {
      setServiceData(initialServiceData);
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [loading]);

  return (
    <>
      <div className={serviceCardList.container}>
        {loading &&
          skeletonArray.map((index) => (
            <SkeletonCard
              key={index}
              type="skeleton-wrapper"
              aria-label="skeleton wrapper"
            >
              <SkeletonCard
                key={index}
                type={"card"}
                aria-label="skeleton card"
              >
                <SkeletonCard type="image" aria-label="skeleton card image">
                  <Shimmer />
                </SkeletonCard>
                <SkeletonCard
                  type="wrapper-info"
                  aria-label="skeleton card info wrapper"
                >
                  <SkeletonCard
                    type="title"
                    aria-label="skeleton card info title"
                  >
                    <Shimmer />
                  </SkeletonCard>
                  <SkeletonCard
                    type="text"
                    aria-label="skeleton card info text"
                  >
                    <Shimmer />
                  </SkeletonCard>
                  <SkeletonCard
                    type="text"
                    aria-label="skeleton card info text"
                  >
                    <Shimmer />
                  </SkeletonCard>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <SkeletonCard
                      type="avatar"
                      aria-label="skeleton card avatar"
                    >
                      <Shimmer />
                    </SkeletonCard>
                    <SkeletonCard
                      type="detail"
                      aria-label="skeleton card detail"
                    >
                      <Shimmer />
                    </SkeletonCard>
                  </div>
                </SkeletonCard>
              </SkeletonCard>
            </SkeletonCard>
          ))}
        {serviceData.map((service: ServiceCardType, index: number) => (
          <ServiceCard {...service} key={`${service.serviceName}-${index}`} />
        ))}
      </div>
    </>
  );
};

export default ServiceCardList;
