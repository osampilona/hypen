import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import LocationSearchInputField from "@/components/Forms/LocationSearchInputField/LocationSearchInputField";

describe("LocationSearchInputField", () => {
  test("renders correctly LocationSearchInputField component", () => {
    render(<LocationSearchInputField categoryName={""} />);

    const element = screen.getByTestId("LocationSearchInputField");
    expect(element).toBeTruthy();
  });
});
