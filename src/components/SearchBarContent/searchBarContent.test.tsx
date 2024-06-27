import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import SearchBarContent from "@/components/SearchBarContent/SearchBarContent";

describe("SearchBarContent", () => {
  test("renders correctly SearchBarContent component", () => {
    render(
      <SearchBarContent
        isLabelClicked={null}
        onClick={function (label: string): void {
          throw new Error("Function not implemented.");
        }}
      />,
    );

    const element = screen.getByTestId("searchBarContent");
    expect(element).toBeTruthy();
  });
});
