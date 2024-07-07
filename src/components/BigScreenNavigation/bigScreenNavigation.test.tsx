import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import BigScreenNavigation from "@/components/BigScreenNavigation/BigScreenNavigation";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "@/lib/features/theme/theme";

// Create a mock store with your reducers
const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

describe("BigScreenNavigation", () => {
  test("renders correctly BigScreenNavigation component", () => {
    render(
      <Provider store={store}>
        <BigScreenNavigation />
      </Provider>,
    );

    const element = screen.getByTestId("bigScreenNavigation");
    expect(element).toBeTruthy();
  });
});
