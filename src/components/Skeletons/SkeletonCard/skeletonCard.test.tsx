import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import SkeletonCard from "./SkeletonCard";

describe("SkeletonCard", () => {
  it("should render the SkeletonCard component", () => {
    render(<SkeletonCard type={""} />);
    expect(screen.getByTestId("skeleton-card")).toBeInTheDocument();
  });
}); // Add closing parenthesis here
