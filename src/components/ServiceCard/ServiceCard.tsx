"use client";
import React from "react";
import Carousel from "@/components/Carousel/Carousel";
import serviceCard from "@/components/ServiceCard/serviceCard.module.scss";
import { TiStarHalfOutline } from "react-icons/ti";
import { AiOutlineUser } from "react-icons/ai";
import { ServiceCardType } from "@/types/services/card";
import { FiUserPlus } from "react-icons/fi";
import { FiUserCheck } from "react-icons/fi";
import Link from "next/link";

const ServiceCard = (props: ServiceCardType) => {
  const truncateText = (text: string, maxLength: number = 21) => {
    return text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  };

  return (
    <Link href={`/service/${props.serviceId}`}>
      <div className={serviceCard.container}>
        <div className={serviceCard.container__image}>
          {props.images && props.images.length > 0 ? (
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
          <div className={serviceCard.container__divider}></div>
          <div className={serviceCard.container__business}>
            <div className={serviceCard.container__business__left}>
              <div className={serviceCard.container__business__left__image}>
                <AiOutlineUser size={24} />
              </div>
              <div className={serviceCard.container__business__left__details}>
                <h1 title={props.companyName}>
                  {truncateText(props.companyName)}
                </h1>
                <p title={props.companyAddress}>
                  {truncateText(props.companyAddress)}
                </p>
              </div>
            </div>
            <p className={serviceCard.container__business__follow}>
              {props.companyFollowingState ? (
                <FiUserCheck size={24} data-testid="company-following-icon" />
              ) : (
                <FiUserPlus
                  size={24}
                  data-testid="company-not-following-icon"
                />
              )}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
