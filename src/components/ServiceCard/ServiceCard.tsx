"use client";
import React, { useState, useEffect } from "react";
import { fetchServiceImage } from "@/services/apiService";
import serviceCard from "@/components/ServiceCard/serviceCard.module.scss";
import Image from "next/image";
import { GoHeart } from "react-icons/go";
import { TiStarHalfOutline } from "react-icons/ti";
import { AiOutlineUser } from "react-icons/ai";

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
      <div className={serviceCard.container__image}>
        {!error && !data && <p>loading...</p>}
        {data && (
          <Image
            className={serviceCard.container__image}
            src={data.urls.full}
            // src=""
            alt="Image"
            height={280}
            width={343}
          />
        )}
        <div className={serviceCard.container__image__heart}>
          <GoHeart style={{ color: "#fff" }} />
        </div>
      </div>
      <div className={serviceCard.container__info}>
        <div className={serviceCard.container__info__service}>
          <h1>Full makeup</h1>
          <div className={serviceCard.container__info__service__rate}>
            <TiStarHalfOutline />
            <p>4.5</p>
          </div>
        </div>
        <div className={serviceCard.container__info__details}>
          <div className={serviceCard.container__info__details__days}>
            <p>Mon/Sat</p>
            <div
              className={serviceCard.container__info__details__days__dot}
            ></div>
            <p>9:00-19:00</p>
          </div>
          <p className={serviceCard.container__info__details__days__hours}>
            Deposit 30% of the price
          </p>
          <p className={serviceCard.container__info__details__days__hours}>
            1.3 km. away from you
          </p>
        </div>
        <div className={serviceCard.container__devider}></div>
        <div className={serviceCard.container__business}>
          <div className={serviceCard.container__business__left}>
            <div className={serviceCard.container__business__left__image}>
              <AiOutlineUser size={24} />
            </div>
            <div className={serviceCard.container__business__left__details}>
              <h1>Chiaroscuro salon</h1>
              <p>Hannemanns Alle 4A, st.3</p>
            </div>
          </div>
          <p className={serviceCard.container__business__follow}>Follow</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
