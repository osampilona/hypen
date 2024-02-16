"use client";
import React, { useState, useEffect } from "react";
import { fetchServiceImage } from "@/services/apiService";
import serviceCardImage from "@/components/ServiceCardImage/serviceCardImage.module.scss";
import Image from "next/image";
import { GoHeart } from "react-icons/go";

const ServiceCardImage = () => {
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
    <div className={serviceCardImage.image}>
      {!error && !data && <p>loading...</p>}
      {data && (
        <Image
          className={serviceCardImage.image}
          src={data.urls.full}
          // src=""
          alt="Image"
          height={280}
          width={343}
        />
      )}
      <div className={serviceCardImage.image__heart}>
        <GoHeart style={{ color: "#fff" }} />
      </div>
    </div>
  );
};

export default ServiceCardImage;
