import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import InputField from "@/components/Forms/InputField/InputField";
import { ChangeEvent, KeyboardEvent } from "react";

describe("InputField", () => {
  test("renders correctly InputField component", () => {
    render(
      <InputField
        value={""}
        onChange={function (e: ChangeEvent<HTMLInputElement>): void {
          throw new Error("Function not implemented.");
        }}
        onKeyDown={function (e: KeyboardEvent<HTMLInputElement>): void {
          throw new Error("Function not implemented.");
        }}
        id={""}
        aria-label={""}
        aria-autocomplete={"list"}
        aria-controls={""}
        aria-expanded={false}
      />,
    );

    const element = screen.getByTestId("inputField");
    expect(element).toBeTruthy();
  });
});
