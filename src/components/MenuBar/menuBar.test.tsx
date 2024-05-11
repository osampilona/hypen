import { describe, test, expect } from "vitest";
import { render } from "@testing-library/react";
import MenuBar from "@/components/MenuBar/MenuBar";

describe("MenuBar", () => {
  test("renders correctly", () => {
    const { container } = render(<MenuBar />);
    expect(container).toMatchSnapshot();
  });
});
