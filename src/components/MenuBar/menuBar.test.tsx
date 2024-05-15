import { describe, test, expect } from "vitest";
import { render } from "@testing-library/react";
import MenuBar from "@/components/MenuBar/MenuBar";

describe("MenuBar", () => {
  test("renders correctly", () => {
    const { container } = render(<MenuBar />);
    expect(container).toMatchSnapshot();
  });

  test("renders 4 icons", () => {
    const { container } = render(<MenuBar />);
    const icons = container.querySelectorAll("svg");
    expect(icons.length).toBe(4);
  });
});
