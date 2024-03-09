"use client";
import React, { useState, useEffect } from "react";
import { fetchServiceImage } from "@/services/apiService";
import Carousel from "@/components/Carousel/Carousel";
import serviceCard from "@/components/ServiceCard/serviceCard.module.scss";
import { TiStarHalfOutline } from "react-icons/ti";
import { AiOutlineUser } from "react-icons/ai";

//TODO: remove this when data is fetched from the server
//import images for testing carousel staticaly
import img_1 from "../../../src/assets/img/image_1.jpeg";
import img_2 from "../../../src/assets/img/image_2.jpeg";
import img_3 from "../../../src/assets/img/image_3.jpeg";
import img_4 from "../../../src/assets/img/image_4.jpeg";
import img_5 from "../../../src/assets/img/image_5.jpeg";

const IMAGES = [
  { url: img_1, alt: "Image 1" },
  { url: img_2, alt: "Image 2" },
  { url: img_3, alt: "Image 3" },
  { url: img_4, alt: "Image 4" },
  { url: img_5, alt: "Image 5" },
];

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
        {/* {data && (
          <Carousel
            images={[{ url: data.urls.full, alt: "Random Image" }]}
          ></Carousel>
        )} */}
        <Carousel images={IMAGES} />
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
