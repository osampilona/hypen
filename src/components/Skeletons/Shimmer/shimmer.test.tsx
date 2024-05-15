import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Shimmer from "@/components/Skeletons/Shimmer/Shimmer";

describe("Shimmer", () => {
  test("renders correctly with wrapper and shimmer elements", () => {
    render(<Shimmer />);

    // Check if the wrapper element is rendered with the correct class
    const wrapperElement = screen.getByTestId("shimmer-wrapper");
    expect(wrapperElement).toBeTruthy();
    expect(wrapperElement.className).toContain("wrapper");

    // Check if the shimmer element is rendered with the correct class
    const shimmerElement = screen.getByTestId("shimmer");
    expect(shimmerElement).toBeTruthy();
    expect(shimmerElement.className).toContain("wrapper__shimmer");
  });
});
