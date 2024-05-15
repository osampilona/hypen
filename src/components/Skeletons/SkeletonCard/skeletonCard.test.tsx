import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import SkeletonCard from "@/components/Skeletons/SkeletonCard/SkeletonCard";

describe("SkeletonCard", () => {
  test("renders correctly with skeleton card element", () => {
    render(<SkeletonCard type="card" />);

    // Check if the skeleton card element is rendered with the correct class
    const skeletonCardElement = screen.getByTestId("skeleton-card");
    expect(skeletonCardElement).toBeTruthy();
    expect(skeletonCardElement.className).toContain("skeleton");
    expect(skeletonCardElement.className).toContain("card");
  });
});
