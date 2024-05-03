import React from "react";
import { render, screen } from "@testing-library/react";
import SkeletonElement from "@/components/Skeletons/SkeletonCard/SkeletonCard";
import skeleton from "@/components/Skeletons/SkeletonCard/skeletonCard.module.scss";

describe("SkeletonElement", () => {
  it("renders without crashing", () => {
    render(<SkeletonElement type="card" />);
    const skeletonElement = screen.getByTestId("skeleton-card");
    expect(skeletonElement).toBeInTheDocument();
  });

  it("applies type-specific class based on the type prop", () => {
    const { rerender } = render(<SkeletonElement type="card" />);
    let skeletonElement = screen.getByTestId("skeleton-card");
    expect(skeletonElement).toHaveClass(skeleton.skeleton);
    expect(skeletonElement).toHaveClass(skeleton.card);

    rerender(<SkeletonElement type="avatar" />);
    skeletonElement = screen.getByTestId("skeleton-card");
    expect(skeletonElement).toHaveClass(skeleton.skeleton);
    expect(skeletonElement).toHaveClass(skeleton.avatar);
  });

  it("renders children when passed", () => {
    const testMessage = "Loading your content...";
    render(
      <SkeletonElement type="card">
        <div>{testMessage}</div>
      </SkeletonElement>,
    );
    expect(screen.getByText(testMessage)).toBeInTheDocument();
  });
});
