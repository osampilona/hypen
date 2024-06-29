import { describe, test, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Carousel from "@/components/Carousel/Carousel";
import image1 from "@/assets/img/image_1.jpeg";
import image2 from "@/assets/img/image_2.jpeg";
import image3 from "@/assets/img/image_3.jpeg";
import { StaticImageData } from "next/image";

const images: { url: StaticImageData; alt: string }[] = [
  {
    url: image1,
    alt: "img_1",
  },
  {
    url: image2,
    alt: "Image 2",
  },
  {
    url: image3,
    alt: "Image 3",
  },
];

describe("Carousel", () => {
  test("renders correctly with carousel element", () => {
    render(<Carousel images={[]} serviceId={""} />);
    const carouselElement = screen.getAllByTestId("carousel")[0];
    expect(carouselElement).toBeTruthy();
    expect(carouselElement.className).toContain("container");
  });

  test("renders multiple images correctly", () => {
    render(<Carousel images={images} serviceId={"1"} />);
    const imageElements = screen
      .getAllByTestId(/image-\d+/)
      .map((el) => el as HTMLImageElement);
    expect(imageElements.length).toBe(images.length);
    images.forEach((image, index) => {
      expect(imageElements[index].getAttribute("src")).toBeTruthy();
      expect(imageElements[index].getAttribute("alt")).toBe(image.alt);
    });
  });

  test("navigates to next image on next button click", () => {
    render(<Carousel images={images} serviceId={"1"} />);
    const nextButton = screen.getAllByLabelText("View next image")[0];
    fireEvent.click(nextButton);
    expect(screen.getAllByAltText("Image 2")).toBeTruthy();
  });

  test("navigates to previous image on previous button click", () => {
    render(<Carousel images={images} serviceId={"1"} />);
    const prevButton = screen.getAllByLabelText("View previous image")[0];
    fireEvent.click(prevButton);
    expect(screen.getAllByAltText("Image 3")).toBeTruthy();
  });

  test("navigates through images using arrow keys", () => {
    render(<Carousel images={images} serviceId={"1"} />);
    const carouselElement = screen.getAllByTestId("carousel")[0];

    fireEvent.keyDown(carouselElement, { key: "ArrowRight" });
    expect(screen.getAllByAltText("Image 2")).toBeTruthy();

    fireEvent.keyDown(carouselElement, { key: "ArrowLeft" });
    expect(screen.getAllByAltText("Image 3")).toBeTruthy();
  });

  test("swipes to next image", () => {
    render(<Carousel images={images} serviceId={"1"} />);
    const carouselElement = screen.getAllByTestId("carousel")[0];

    fireEvent.pointerDown(carouselElement, { clientX: 100 });
    fireEvent.pointerMove(carouselElement, { clientX: 75 });
    fireEvent.pointerUp(carouselElement, { clientX: 50 });
    expect(screen.getAllByAltText("Image 2")).toBeTruthy();
  });

  test("swipes to previous image", () => {
    render(<Carousel images={images} serviceId={"1"} />);
    const carouselElement = screen.getAllByTestId("carousel")[0];

    fireEvent.pointerDown(carouselElement, { clientX: 50 });
    fireEvent.pointerMove(carouselElement, { clientX: 75 });
    fireEvent.pointerUp(carouselElement, { clientX: 100 });
    expect(screen.getAllByAltText("Image 3")).toBeTruthy();
  });

  test("navigates using dots", () => {
    render(<Carousel images={images} serviceId={"1"} />);
    const dots = screen.getAllByRole("button", { name: /View image/i });
    fireEvent.click(dots[1]);
    expect(screen.getAllByAltText("Image 2")).toBeTruthy();

    fireEvent.click(dots[0]);
    expect(screen.getAllByAltText("img_1")).toBeTruthy();
  });

  test("handles pointer events correctly", () => {
    render(<Carousel images={images} serviceId={"1"} />);
    const carouselElement = screen.getAllByTestId("carousel")[0];

    fireEvent.pointerDown(carouselElement, { clientX: 100 });
    fireEvent.pointerMove(carouselElement, { clientX: 75 });
    fireEvent.pointerUp(carouselElement, { clientX: 50 });

    expect(screen.getAllByAltText("Image 2")).toBeTruthy();
  });

  test("handles pointer cancel events correctly", () => {
    render(<Carousel images={images} serviceId={"1"} />);
    const carouselElement = screen.getAllByTestId("carousel")[0];

    fireEvent.pointerDown(carouselElement, { clientX: 100 });
    fireEvent.pointerCancel(carouselElement);

    expect(screen.getAllByAltText("img_1")).toBeTruthy(); // Assuming no change
  });
});
