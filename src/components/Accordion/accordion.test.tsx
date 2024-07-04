import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Accordion from "@/components/Accordion/Accordion";

describe("Accordion", () => {
  test("renders correctly Accordion component", () => {
    render(<Accordion title={""} options={[]} />);

    const element = screen.getByTestId("accordion");
    expect(element).toBeTruthy();
  });
});
