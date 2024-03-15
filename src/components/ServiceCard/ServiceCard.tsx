"use client";
import React from "react";
import Carousel from "@/components/Carousel/Carousel";
import serviceCard from "./serviceCard.module.scss";
import { TiStarHalfOutline } from "react-icons/ti";
import { AiOutlineUser } from "react-icons/ai";
import { ServiceCardType } from "@/types/services/card";

const ServiceCard = (props: ServiceCardType) => {
  return (
    <div className={serviceCard.container}>
      <div className={serviceCard.container__image}>
        {props.images && props.images.length > 0 ? ( // Added conditional check
          <Carousel images={props.images} />
        ) : (
          <div>No images available</div>
        )}
      </div>
      <div className={serviceCard.container__info}>
        <div className={serviceCard.container__info__service}>
          <h1>{props.serviceName}</h1>
          <div className={serviceCard.container__info__service__rate}>
            <TiStarHalfOutline />
            <p>{props.serviceRate}</p>
          </div>
        </div>
        <div className={serviceCard.container__info__details}>
          <div className={serviceCard.container__info__details__days}>
            <p>{props.workingDays}</p>
            <div
              className={serviceCard.container__info__details__days__dot}
            ></div>
            <p>{props.workingHours}</p>
          </div>
          <p className={serviceCard.container__info__details__days__hours}>
            {props.serviceNote}
          </p>
          <p className={serviceCard.container__info__details__days__hours}>
            {props.serviceDistance}
          </p>
        </div>
        <div className={serviceCard.container__devider}></div>
        <div className={serviceCard.container__business}>
          <div className={serviceCard.container__business__left}>
            <div className={serviceCard.container__business__left__image}>
              <AiOutlineUser size={24} />
            </div>
            <div className={serviceCard.container__business__left__details}>
              <h1>{props.companyName}</h1>
              <p>{props.companyAdress}</p>
            </div>
          </div>
          <p className={serviceCard.container__business__follow}>
            {props.companyFollowingState}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
