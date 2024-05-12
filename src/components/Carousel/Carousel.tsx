import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaCircle } from "react-icons/fa";
import { GoHeart } from "react-icons/go";
import carousel from "@/components/Carousel/carousel.module.scss";
import { CardImage } from "@/types/services/card";

type imagesProps = {
  images: CardImage[];
};

const Carousel = ({ images }: imagesProps) => {
  const [imageIndex, setImageIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);
  const nextButtonRef = useRef<HTMLButtonElement>(null);
  const prevButtonRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const showNextImage = useCallback(() => {
    setImageIndex((index) => (index === images.length - 1 ? 0 : index + 1));
    nextButtonRef.current?.focus();
  }, [images.length]);

  const showPrevImage = useCallback(() => {
    setImageIndex((index) => (index === 0 ? images.length - 1 : index - 1));
    prevButtonRef.current?.focus();
  }, [images.length]);

  useEffect(() => {
    const container = containerRef.current;
    // container?.focus();
    if (!container) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        showNextImage();
      } else if (event.key === "ArrowLeft") {
        showPrevImage();
      }
    };

    const handlePointerDown = (e: PointerEvent) => {
      setStartX(e.clientX);
      setIsSwiping(true);
      e.preventDefault();
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (!isSwiping) return;
    };

    const handlePointerUp = (e: PointerEvent) => {
      if (!isSwiping) return;

      const endX = e.clientX;
      const distance = startX - endX;

      if (Math.abs(distance) > 10) {
        if (distance > 0) {
          showNextImage();
        } else {
          showPrevImage();
        }
      }
      setIsSwiping(false);
    };

    container?.addEventListener("keydown", handleKeyDown);
    container?.addEventListener("pointerdown", handlePointerDown);
    container?.addEventListener("pointermove", handlePointerMove);
    container?.addEventListener("pointerup", handlePointerUp);
    container?.addEventListener("pointercancel", handlePointerUp);

    return () => {
      container?.removeEventListener("keydown", handleKeyDown);
      container?.removeEventListener("pointerdown", handlePointerDown);
      container?.removeEventListener("pointermove", handlePointerMove);
      container?.removeEventListener("pointerup", handlePointerUp);
      container?.removeEventListener("pointercancel", handlePointerUp);
    };
  }, [showNextImage, showPrevImage, isSwiping, startX]);

  const getDotsState = useCallback(() => {
    let dotsCount = Math.min(5, images.length);
    let dots = Array(dotsCount).fill(false);

    if (images.length > 5) {
      if (imageIndex === 0) dots[0] = true;
      else if (imageIndex === 1) dots[1] = true;
      else if (imageIndex === images.length - 1) dots[4] = true;
      else if (imageIndex === images.length - 2) dots[3] = true;
      else dots[2] = true;
    } else {
      dots[imageIndex] = true;
    }

    return dots;
  }, [imageIndex, images.length]);

  const dotsState = getDotsState();

  return (
    <section
      aria-label="Image carousel"
      className={carousel.container}
      ref={containerRef}
      tabIndex={0}
      data-testid="carousel"
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
            key={`${url.toString()}-${index}`}
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

      {images.length > 1 && (
        <>
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
        </>
      )}

      <div className={carousel.container__image__heart}>
        <GoHeart aria-hidden style={{ color: "#fff" }} />
      </div>

      {images.length > 1 && (
        <div className={carousel.container__image__navigation}>
          {dotsState.map((isActive, index) => (
            <button
              key={index}
              onClick={() => {
                if (images.length <= 5 || index === 0) {
                  setImageIndex(index);
                } else if (index === 1 && images.length > 5) {
                  setImageIndex(1);
                } else if (index === 4 && images.length > 5) {
                  setImageIndex(images.length - 1);
                } else if (index === 3 && images.length > 5) {
                  setImageIndex(images.length - 2);
                } else if (index === 2 && images.length > 5) {
                  setImageIndex(Math.floor(images.length / 2));
                }
              }}
              aria-label={`View image ${index + 1}`}
              className={`${carousel.container__image__navigation__dot} ${
                isActive
                  ? carousel.container__image__navigation__dot__active
                  : ""
              }`}
            >
              <FaCircle aria-hidden />
            </button>
          ))}
        </div>
      )}
    </section>
  );
};

export default Carousel;
