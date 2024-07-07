import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import SmallScreenNavigation from "@/components/SmallScreenNavigation/SmallScreenNavigation";

describe("SmallScreenNavigation", () => {
  test("renders correctly SmallScreenNavigation component", () => {
    render(<SmallScreenNavigation />);

    const element = screen.getByTestId("smallScreenNavigation");
    expect(element).toBeTruthy();
  });
});
