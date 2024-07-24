import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import CustomInputField from "@/components/Forms/CustomInputField/CustomInputField";

describe("CustomInputField", () => {
  test("renders correctly CustomInputField component", () => {
    render(
      <CustomInputField
        categoryName={""}
        value={""}
        onChange={function (value: string): void {
          throw new Error("Function not implemented.");
        }}
      />,
    );

    const element = screen.getByTestId("customInputField");
    expect(element).toBeTruthy();
  });
});
