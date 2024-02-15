"use client";
import React, { useState, useEffect } from "react";
import serviceCard from "@/components/ServiceCard/serviceCard.module.scss";
import { fetchServiceImage } from "@/services/apiService";
import Image from "next/image";

export interface IServiceCardProps {}

const ServiceCard = (props: IServiceCardProps) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchServiceImage()
      .then((data) => {
        //handle data
        setData(data);
        console.log("Random Image:", data);
      })
      .catch((error) => {
        //handle error
        setError(error);
        console.error("Error fetching random image:", error);
      });
  }, []);

  return (
    <div className={serviceCard.container}>
      <div>
        {!error && !data && <p>loading...</p>}
        {data && (
          <Image
            className={serviceCard.image}
            src={data.urls.full}
            alt="Image"
            height={280}
            width={343}
          />
        )}
      </div>
      <div className={serviceCard.info}></div>
    </div>
  );
};

export default ServiceCard;
