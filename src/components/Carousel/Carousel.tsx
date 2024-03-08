import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import styles from "./carousel.module.scss";

type ImagesUrlProps = {
  imagesUrl: string[];
};

const Carousel = ({ imagesUrl }: ImagesUrlProps) => {
  const [imageIndex, setImageIndex] = useState(0);

  const showNextImage = () => {
    setImageIndex((index) => {
      if (index === imagesUrl.length - 1) {
        return 0;
      }
      return index + 1;
    });
  };

  const showPrevImage = () => {
    setImageIndex((index) => {
      if (index === 0) {
        return imagesUrl.length - 1;
      }
      return index - 1;
    });
  };

  return (
    <div className={styles.container}>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          overflow: "hidden",
        }}
      >
        {imagesUrl.map((url) => (
          <Image
            key={url}
            src={imagesUrl[imageIndex]}
            alt="image"
            className={styles.container__image}
            style={{ translate: `${-100 * imageIndex}%` }}
          />
        ))}
      </div>
      <button
        onClick={showPrevImage}
        className={styles.container__image__button}
        style={{ left: 0 }}
      >
        <IoIosArrowBack />
      </button>
      <button
        onClick={showNextImage}
        className={styles.container__image__button}
        style={{ right: 0 }}
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default Carousel;
