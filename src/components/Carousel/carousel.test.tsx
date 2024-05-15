import { describe, test, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Carousel from "@/components/Carousel/Carousel";

describe("Carousel", () => {
  // Test rendering of the carousel element
  test("renders correctly with carousel element", () => {
    render(<Carousel images={[]} />);

    const carouselElement = screen.getByTestId("carousel");
    expect(carouselElement).toBeTruthy();
    expect(carouselElement.className).toContain("container");
  });
});
