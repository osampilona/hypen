"use client";
import React from "react";
import Carousel from "@/components/Carousel/Carousel";
import serviceCard from "@/components/ServiceCard/serviceCard.module.scss";
import {
  TiStarHalfOutline,
  TiStarFullOutline,
  TiStarOutline,
} from "react-icons/ti";
import { AiOutlineUser } from "react-icons/ai";
import { ServiceCardType } from "@/types/services/card";
import FollowButton from "@/components/FollowButton/FollowButton";
import Link from "next/link";

const ServiceCard = (props: ServiceCardType) => {
  const truncateText = (text: string, maxLength: number = 21) => {
    return text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  };

  const renderStarIcon = (serviceRate: number) => {
    if (serviceRate > 4.5) {
      return <TiStarFullOutline />;
    } else if (serviceRate > 1.5) {
      return <TiStarHalfOutline />;
    } else {
      return <TiStarOutline />;
    }
  };

  return (
    <>
      <div className={serviceCard.container}>
        <div className={serviceCard.container__image}>
          {props.images && props.images.length > 0 ? (
            <Carousel images={props.images} serviceId={props.serviceId} />
          ) : (
            <div>No images available</div>
          )}
        </div>
        <Link href={`/service/${props.serviceId}`}>
          <div className={serviceCard.container__info}>
            <div className={serviceCard.container__info__service}>
              <h1>{props.serviceName}</h1>
              <div className={serviceCard.container__info__service__rate}>
                {renderStarIcon(props.serviceRate)}
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
                {props.serviceDistance} km away from you
              </p>
            </div>
          </div>
        </Link>
        <div className={serviceCard.container__divider}></div>
        <div className={serviceCard.container__info}>
          <div className={serviceCard.container__business}>
            <Link href={`/company/${props.companyId}`}>
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
            </Link>
            <div className={serviceCard.container__business__follow}>
              <FollowButton
                companyId={props.companyId}
                companyName={props.companyName}
                initialFollowState={props.companyFollowingState}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
