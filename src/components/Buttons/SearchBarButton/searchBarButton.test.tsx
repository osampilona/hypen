import { describe, test, expect, vitest } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchBarButton from "@/components/Buttons/SearchBarButton/SearchBarButton";
import searchBarButton from "@/components/Buttons/SearchBarButton/searchBarButton.module.scss";

describe("SearchBarButton", () => {
  test("renders correctly SearchBarButton component", () => {
    render(
      <SearchBarButton
        icon={<div>Icon</div>}
        label={"What"}
        isLabelClicked={"What"}
        onClick={() => {}}
        dataTestId={"searchBarButtonWhat"}
      />,
    );

    const element = screen.getByTestId("searchBarButtonWhat");
    expect(element).toBeTruthy();
  });

  test("calls onClick when button is clicked", () => {
    const handleClick = vitest.fn();

    render(
      <SearchBarButton
        icon={<div>Icon</div>}
        label={"What"}
        isLabelClicked={null}
        onClick={handleClick}
        dataTestId={"searchBarButtonWhat"}
      />,
    );

    const element = screen.getAllByTestId("searchBarButtonWhat")[1];
    fireEvent.click(element);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("applies active class when isLabelClicked matches label", () => {
    render(
      <SearchBarButton
        icon={<div>Icon</div>}
        label={"What"}
        isLabelClicked={"What"}
        onClick={() => {}}
        dataTestId={"searchBarButtonWhat"}
      />,
    );

    const element = screen.getAllByTestId("searchBarButtonWhat")[0];
    expect(element.classList.contains(searchBarButton.active)).toBe(true);
  });

  test("does not apply active class when isLabelClicked does not match label", () => {
    render(
      <SearchBarButton
        icon={<div>Icon</div>}
        label={"What"}
        isLabelClicked={"Where"}
        onClick={() => {}}
        dataTestId={"searchBarButtonWhat"}
      />,
    );

    const element = screen.getAllByTestId("searchBarButtonWhat")[1];
    expect(element.classList.contains(searchBarButton.active)).toBe(false);
  });
});
