"use client";
import React from "react";
import Accordion from "@/components/Accordion/Accordion";
import TimeSlotSelector from "@/components/TimeSlotsSelector/TimeSlotsSelector";
import PhotoGrid from "@/components/PhotoGrid/PhotoGrid";
import CtaButton from "@/components/Buttons/CTAButton/CtaButton";
import { getRandomImages, getServiceById } from "@/data/serviceData";
import { CardImage } from "@/types/services/card";
import styles from "./servicePage.module.scss";
import CustomCalendar from "@/components/CustomCalendar/CustomCalendar";

const ServicePage = ({ params }: { params: { seviceId: string } }) => {
  const service = getServiceById(params.seviceId);
  const serviceName = service?.serviceName || "Service";
  const images = service?.images || getRandomImages(); // Use service images or fallback to random

  return (
    <main className={styles.main}>
      <div className={styles.headerSection}>
        <div className={styles.companyInfo}>
          <h1 className={styles.title}>{serviceName}</h1>
          <h2>{service?.companyName}</h2>
          <p>{service?.companyAddress}</p>
        </div>
        <CtaButton
          label={service?.companyFollowingState ? "Following" : "Follow"}
          isPrimary={!service?.companyFollowingState}
          size="small"
        />
      </div>
      <div className={styles.accordionContainer}>
        <Accordion title="Timeslot Details" selectionType="timeslot">
          <TimeSlotSelector categoryName={serviceName} />
        </Accordion>
        <Accordion title="Service Description" initiallyOpen={false} selectionType="date">
          <CustomCalendar categoryName={serviceName} />
        </Accordion>
      </div>
      <div className={styles.photoGridContainer}>
        <PhotoGrid
          images={images.map((img: CardImage) =>
            typeof img.url === "string" ? img.url : img.url.src,
          )}
        />
      </div>
    </main>
  );
};
export default ServicePage;
