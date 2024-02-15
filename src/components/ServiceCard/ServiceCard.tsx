"use client";
import React, { useState, useEffect } from "react";
import serviceCard from "@/components/ServiceCard/serviceCard.module.scss";
import { fetchServiceImage } from "@/services/apiService";
import Image from "next/image";
import { TiStarHalfOutline } from "react-icons/ti";

export interface IServiceCardProps {
  //   serviceName: string;
  //   serviceRate: number;
  //   workingDays: string;
  //   workingHours: number;
  //   serviceNote: string;
  //   serviceDistance: string;
  //   companyName: string;
  //   companyAdress: string;
  //   companyAdressDetail: string;
  //   companyFollowingState: string;
}

const ServiceCard = (props: IServiceCardProps) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  //   useEffect(() => {
  //     fetchServiceImage()
  //       .then((data) => {
  //         //handle data
  //         setData(data);
  //         console.log("Random Image:", data);
  //       })
  //       .catch((error) => {
  //         //handle error
  //         setError(error);
  //         console.error("Error fetching random image:", error);
  //       });
  //   }, []);

  return (
    <div className={serviceCard.container}>
      <div className={serviceCard.image}>
        {/* {!error && !data && <p>loading...</p>} */}
        {data && (
          <Image
            className={serviceCard.image}
            // src={data.urls.full}
            src=""
            alt="Image"
            height={280}
            width={343}
          />
        )}
      </div>
      <div className={serviceCard.info}>
        <div className={serviceCard.info__service}>
          <h1>Full makeup</h1>
          <div className={serviceCard.info__service__rate}>
            <TiStarHalfOutline />
            <p>4.5</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
