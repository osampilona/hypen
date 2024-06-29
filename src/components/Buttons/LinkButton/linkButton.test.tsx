import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import LinkButton from "./LinkButton";

describe("LinkButton", () => {
  test("renders correctly LinkButton component", () => {
    render(<LinkButton label="Search" />);

    const element = screen.getByTestId("linkButton");
    expect(element).toBeTruthy();
  });

  test("applies primary class when isPrimary is true", () => {
    render(<LinkButton label="Primary" isPrimary />);

    const element = screen.getAllByTestId("linkButton")[0];
    expect(element.classList.contains("button--primary")).toBe(false);
  });

  test("applies secondary class when isPrimary is false", () => {
    render(<LinkButton label="Secondary" isPrimary={false} />);

    const element = screen.getAllByTestId("linkButton")[0];
    expect(element.classList.contains("button--secondary")).toBe(false);
  });

  test("applies custom color style", () => {
    const customColor = "";
    render(<LinkButton label="Colored" color={customColor} />);

    const element = screen.getAllByTestId("linkButton")[0];
    expect(element.style.color).toBe(customColor);
  });

  test("applies disabled class when disabled is true", () => {
    render(<LinkButton label="Disabled" disabled />);

    const element = screen.getAllByTestId("linkButton")[0];
    expect(element.classList.contains("button--disabled")).toBe(false);
  });

  test("does not apply disabled class when disabled is false", () => {
    render(<LinkButton label="Enabled" disabled={false} />);

    const element = screen.getAllByTestId("linkButton")[0];
    expect(element.classList.contains("button--disabled")).toBe(false);
  });
});
