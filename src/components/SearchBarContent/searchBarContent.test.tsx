import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import SearchBarContent from "@/components/SearchBarContent/SearchBarContent";

describe("SearchBarContent", () => {
  test("renders correctly SearchBarContent component", () => {
    render(
      <SearchBarContent isLabelClicked={null} onClick={function (): void {}} />,
    );

    const element = screen.getByTestId("searchBarContent");
    expect(element).toBeTruthy();
  });
});
