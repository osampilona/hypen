import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ItemsList from "@/components/ItemsList/ItemsList";

describe("ItemsList", () => {
  test("renders correctly ItemsList component", () => {
    render(<ItemsList items={[]} />);

    const element = screen.getByTestId("itemsList");
    expect(element).toBeTruthy();
  });
});
