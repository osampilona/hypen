import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import SuggestionsList from "@/components/Forms/SuggestionsList/SuggestionsList";
import { SetStateAction } from "react";

describe("SuggestionsList", () => {
  test("renders correctly SuggestionsList component", () => {
    render(
      <SuggestionsList
        items={[]}
        onSelect={function (item: unknown): void {
          throw new Error("Function not implemented.");
        }}
        selectedIndex={0}
        setSelectedIndex={function (value: SetStateAction<number>): void {
          throw new Error("Function not implemented.");
        }}
        id={""}
        role={""}
        aria-label={""}
      />,
    );

    const element = screen.getByTestId("suggestionsList");
    expect(element).toBeTruthy();
  });
});
