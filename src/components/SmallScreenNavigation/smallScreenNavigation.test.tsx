import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import SmallScreenNavigation from "@/components/SmallScreenNavigation/SmallScreenNavigation";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "@/lib/features/theme/theme";

// Create a mock store with your reducers
const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

describe("SmallScreenNavigation", () => {
  test("renders correctly SmallScreenNavigation component", () => {
    render(
      <Provider store={store}>
        <SmallScreenNavigation />
      </Provider>,
    );

    const element = screen.getByTestId("smallScreenSelector");
    expect(element).toBeTruthy();
  });
});
