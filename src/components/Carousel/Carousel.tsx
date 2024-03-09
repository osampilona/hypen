import React, { useState, useRef, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaCircle } from "react-icons/fa";
import { GoHeart } from "react-icons/go";
import carousel from "./carousel.module.scss";

//TODO: add this when data is fetched from the server
// type imagesProps = {
//   images: {
//     url: string;
//     alt: string;
//   }[];
// };

//TODO: remove this when data is fetched from the server
type imagesProps = {
  images: {
    url: StaticImageData;
    alt: string;
  }[];
};

const Carousel = ({ images }: imagesProps) => {
  const [imageIndex, setImageIndex] = useState(0);
  const nextButtonRef = useRef<HTMLButtonElement>(null);
  const prevButtonRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const showNextImage = () => {
    setImageIndex((index) => {
      const newIndex = index === images.length - 1 ? 0 : index + 1;
      nextButtonRef.current?.focus();
      return newIndex;
    });
  };

  const showPrevImage = () => {
    setImageIndex((index) => {
      const newIndex = index === 0 ? images.length - 1 : index - 1;
      prevButtonRef.current?.focus();
      return newIndex;
    });
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "ArrowRight") {
      showNextImage();
    } else if (event.key === "ArrowLeft") {
      showPrevImage();
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    container?.addEventListener("keydown", handleKeyDown);

    return () => {
      container?.addEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <section
      aria-label="Image carousel"
      className={carousel.container}
      ref={containerRef}
      tabIndex={0}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          overflow: "hidden",
        }}
      >
        {images.map(({ url, alt }, index) => (
          <Image
            // key={url}
            key={url.toString()}
            src={url}
            alt={alt}
            className={carousel.container__image}
            style={{ transform: `translateX(${-100 * imageIndex}%)` }}
            aria-hidden={index !== imageIndex}
            priority={index === imageIndex}
            height={280}
            width={343}
          />
        ))}
      </div>
      <button
        onClick={showPrevImage}
        className={carousel.container__image__button}
        style={{ left: 0 }}
        ref={prevButtonRef}
        aria-label="View previous image"
      >
        <IoIosArrowBack aria-hidden />
      </button>
      <button
        onClick={showNextImage}
        className={carousel.container__image__button}
        style={{ right: 0 }}
        ref={nextButtonRef}
        aria-label="View next image"
      >
        <IoIosArrowForward aria-hidden />
      </button>
      <div className={carousel.container__image__heart}>
        <GoHeart aria-hidden style={{ color: "#fff" }} />
      </div>
      <div className={carousel.container__image__navigation}>
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setImageIndex(index);
            }}
            aria-label={`View image ${index + 1}`}
            className={`${carousel.container__image__navigation__dot} ${
              index === imageIndex
                ? carousel.container__image__navigation__dot__active
                : ""
            }`}
          >
            <FaCircle aria-hidden />
          </button>
        ))}
      </div>
    </section>
  );
};

export default Carousel;
