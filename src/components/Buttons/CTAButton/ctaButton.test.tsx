import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import CtaButton from "./CtaButton";

describe("CtaButton", () => {
  test("renders correctly CtaButton component", () => {
    render(<CtaButton label="Search" />);

    const element = screen.getByTestId("CtaButton");
    expect(element).toBeTruthy();
  });

  test("applies primary class when isPrimary is true", () => {
    render(<CtaButton label="Primary" buttonType="primary" />);

    const element = screen.getAllByTestId("CtaButton")[0];
    expect(element.classList.contains("button--primary")).toBe(false);
  });

  test("applies secondary class when isPrimary is false", () => {
    render(<CtaButton label="Secondary" buttonType="secondary" />);

    const element = screen.getAllByTestId("CtaButton")[0];
    expect(element.classList.contains("button--secondary")).toBe(false);
  });

  test("applies custom color style", () => {
    const customColor = "";
    render(<CtaButton label="Colored" backgroundColor={customColor} />);

    const element = screen.getAllByTestId("CtaButton")[0];
    expect(element.style.color).toBe(customColor);
  });

  test("applies disabled class when disabled is true", () => {
    render(<CtaButton label="Disabled" disabled />);

    const element = screen.getAllByTestId("CtaButton")[0];
    expect(element.classList.contains("button--disabled")).toBe(false);
  });

  test("does not apply disabled class when disabled is false", () => {
    render(<CtaButton label="Enabled" disabled={false} />);

    const element = screen.getAllByTestId("CtaButton")[0];
    expect(element.classList.contains("button--disabled")).toBe(false);
  });
});
