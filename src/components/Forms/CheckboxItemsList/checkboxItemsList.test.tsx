import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import CheckboxItemsList from "@/components/Forms/CheckboxItemsList/CheckboxItemsList";

describe("CheckboxItemsList", () => {
  test("renders correctly CheckboxItemsList component", () => {
    render(<CheckboxItemsList title={""} items={[]} />);

    const element = screen.getByTestId("checkboxItemsList");
    expect(element).toBeTruthy();
  });
});
