import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import SubNavigationBar from "./SubNavigationBar";

describe("SubNavigationBar", () => {
  it("should render the SubNavigationBar component", () => {
    render(<SubNavigationBar />);
    expect(screen.getByTestId("subnavigation-bar")).toBeInTheDocument();
  });
}); // Add closing parenthesis here
