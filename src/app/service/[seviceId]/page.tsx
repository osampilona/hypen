"use client";
import PhotoGrid from "@/components/PhotoGrid/PhotoGrid";
import { getRandomImages } from "@/data/serviceData";
import { CardImage } from "@/types/services/card";
import { useEffect, useState } from "react";

const ServicePage = () => {
  const [images, setImages] = useState<CardImage[]>([]);
  useEffect(() => {
    setImages(getRandomImages());
  }, []);
  return (
    <main>
      <h1>Service page</h1>
      <PhotoGrid images={images} />
    </main>
  );
};
export default ServicePage;
