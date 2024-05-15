import { describe, test, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "@/components/SearchBar/SearchBar";

describe("SearchBar", () => {
  test("handleClick updates isLabelClicked state correctly", () => {
    const { container } = render(
      <SearchBar labelWhat="What" labelWhere="Where" labelWhen="When" />,
    );

    // Initially, isLabelClicked should be null
    expect(container).toMatchSnapshot();
    expect(screen.queryAllByTestId("underlined-label")).toHaveLength(0);

    // Simulate click on labelWhat
    fireEvent.click(screen.getByText("What"));
    expect(screen.getByTestId("underlined-label").textContent).toBe("What");

    // Simulate click on labelWhat again to toggle off
    fireEvent.click(screen.getByText("What"));
    expect(screen.queryAllByTestId("underlined-label")).toHaveLength(0);

    // Simulate click on labelWhere
    fireEvent.click(screen.getByText("Where"));
    expect(screen.getByTestId("underlined-label").textContent).toBe("Where");

    // Simulate click on labelWhat again to toggle off
    fireEvent.click(screen.getByText("Where"));
    expect(screen.queryAllByTestId("underlined-label")).toHaveLength(0);

    // Simulate click on labelWhen
    fireEvent.click(screen.getByText("When"));
    expect(screen.getByTestId("underlined-label").textContent).toBe("When");

    // Simulate click on labelWhat again to toggle off
    fireEvent.click(screen.getByText("When"));
    expect(screen.queryAllByTestId("underlined-label")).toHaveLength(0);
  });
});
