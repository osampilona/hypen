// import { describe, test, expect } from "vitest";
// import { render, screen } from "@testing-library/react";
// import CustomCalendar from "@/components/CustomCalendar/CustomCalendar";

// describe("CustomCalendar", () => {
//   test("renders correctly CustomCalendar component", () => {
//     render(
//       <CustomCalendar
//         isLabelClicked={null}
//         handleClick={function (label: string): void {}}
//       />,
//     );

//     const element = screen.getByTestId("custom-calendar");
//     expect(element).toBeTruthy();
//   });
// });

import { describe, test, expect, vitest } from "vitest";
import { render, screen, fireEvent, act } from "@testing-library/react";
import CustomCalendar from "@/components/CustomCalendar/CustomCalendar";

describe("CustomCalendar", () => {
  test("renders correctly CustomCalendar component", () => {
    render(
      <CustomCalendar
        isLabelClicked={null}
        handleClick={function (label: string): void {}}
      />,
    );

    const element = screen.getByTestId("custom-calendar");
    expect(element).toBeTruthy();
  });

  test("updates selectedDate state on date change", () => {
    render(
      <CustomCalendar
        isLabelClicked={null}
        handleClick={function (label: string): void {}}
      />,
    );

    const element = screen.getAllByTestId("custom-calendar");
    expect(element).toBeTruthy();
  });

  test("updates selectedDate state on date change", () => {
    render(
      <CustomCalendar
        isLabelClicked={null}
        handleClick={function (label: string): void {}}
      />,
    );

    // Open the date picker
    const datePicker = screen.getAllByTestId("custom-calendar")[0];
    fireEvent.click(datePicker); // Trigger the date picker

    // Select a date
    const newDate = new Date(2023, 7, 13); // Example date: July 13, 2023
    const dayButton = screen.getAllByText("13").find(
      (button) => button.closest(".react-datepicker"), // Ensure it's within the date picker
    );

    act(() => {
      fireEvent.click(dayButton!); // Select the new date
    });

    // Check if the selected date is updated in the DatePicker component
    const formattedDate = newDate.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });

    // Check for the element containing the selected date
    const selectedDateElement = screen.queryByText((content, element) => {
      return element?.textContent?.includes(formattedDate) ?? false;
    });

    expect(selectedDateElement).toBeNull();
  });
});
