"use client";
import React, { useRef, useEffect, useState } from "react";
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

  const headerRef = useRef<HTMLDivElement>(null);
  const [isStuck, setIsStuck] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        const rect = headerRef.current.getBoundingClientRect();
        // Check if the header is stuck at the top (position top is 0 or very close to 0)
        setIsStuck(rect.top <= 0);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    // Check initial state
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        ref={headerRef}
        className={`${styles.headerSection} ${isStuck ? styles.stuck : ""}`}
      >
        <div className={styles.companyInfo}>
          <h1 className={styles.title}>{serviceName}</h1>
          <h2>{service?.companyName}</h2>
          <p>{service?.companyAddress}</p>
        </div>
        <CtaButton
          label={service?.companyFollowingState ? "Following" : "Follow"}
          isPrimary={!service?.companyFollowingState}
          size="medium"
        />
      </div>
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.itemContainer}>
            <CustomCalendar categoryName={""} />
          </div>
          <div className={styles.itemContainer}>
            <TimeSlotSelector categoryName={""} />
          </div>
        </div>
        <div className={styles.photoGridContainer}>
          <PhotoGrid
            images={images.map((img: CardImage) =>
              typeof img.url === "string" ? img.url : img.url.src,
            )}
          />
        </div>
      </main>
    </>
  );
};
export default ServicePage;
