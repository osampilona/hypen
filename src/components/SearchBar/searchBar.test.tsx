import { describe, test, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "@/components/SearchBar/SearchBar";

describe("SearchBar", () => {
  test("initially, overlay is not visible", () => {
    render(<SearchBar />);
    expect(screen.queryByTestId("overlay-container")).not.toBeTruthy();
  });

  test("clicking on 'What' button toggles overlay visibility and updates state", () => {
    render(<SearchBar />);

    // Simulate click on "What" button
    fireEvent.click(screen.getAllByTestId("searchBarButtonWhat")[1]);
    expect(screen.getByTestId("overlay-container")).toBeTruthy();
    expect(screen.getByPlaceholderText("What")).toBeTruthy();

    // Simulate click on "What" button again to toggle off
    fireEvent.click(screen.getAllByTestId("searchBarButtonWhat")[1]);
    expect(screen.queryByTestId("overlay-container")).not.toBeTruthy();
  });

  test("clicking on 'Where' button toggles overlay visibility and updates state", () => {
    render(<SearchBar />);

    // Simulate click on "Where" button
    fireEvent.click(screen.getAllByTestId("searchBarButtonWhere")[2]);
    expect(screen.getByTestId("overlay-container")).toBeTruthy();
    expect(screen.getByPlaceholderText("Where")).toBeTruthy();

    // Simulate click on "Where" button again to toggle off
    fireEvent.click(screen.getAllByTestId("searchBarButtonWhere")[2]);
    expect(screen.queryByTestId("overlay-container")).not.toBeTruthy();
  });

  test("clicking on 'When' button toggles overlay visibility and updates state", () => {
    render(<SearchBar />);

    // Simulate click on "When" button
    fireEvent.click(screen.getAllByTestId("searchBarButtonWhen")[3]);
    expect(screen.getByTestId("overlay-container")).toBeTruthy();
    expect(screen.getByTestId("custom-calendar")).toBeTruthy();

    // Simulate click on "When" button again to toggle off
    fireEvent.click(screen.getAllByTestId("searchBarButtonWhen")[3]);
    expect(screen.queryByTestId("overlay-container")).not.toBeTruthy();
  });

  test("closing overlay sets state correctly", () => {
    render(<SearchBar />);

    // Simulate click on "What" button to show overlay
    fireEvent.click(screen.getAllByTestId("searchBarButtonWhat")[1]);
    expect(screen.getByTestId("overlay-container")).toBeTruthy();
    expect(screen.getByPlaceholderText("What")).toBeTruthy();

    // Simulate closing the overlay
    fireEvent.click(screen.getByTestId("overlay-container"));
    expect(screen.queryByTestId("overlay-container")).not.toBeTruthy();
  });

  test("handles input change for 'What' field", () => {
    render(<SearchBar />);

    // Simulate click on "What" button to show overlay
    fireEvent.click(screen.getAllByTestId("searchBarButtonWhat")[1]);
    const input = screen.getByPlaceholderText("What");

    // Simulate input change
    fireEvent.change(input as HTMLInputElement, { target: { value: "test" } });
    expect((input as HTMLInputElement).value).toBe("test");
  });

  test("handles input change for 'Where' field", () => {
    render(<SearchBar />);

    // Simulate click on "Where" button to show overlay
    fireEvent.click(screen.getAllByTestId("searchBarButtonWhere")[2]);
    const input = screen.getByPlaceholderText("Where");

    // Simulate input change
    fireEvent.change(input as HTMLInputElement, {
      target: { value: "test location" },
    });
    expect((input as HTMLInputElement).value).toBe("test location");
  });
});
