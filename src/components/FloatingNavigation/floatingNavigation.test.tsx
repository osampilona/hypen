import { describe, test, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "@/lib/features/theme/theme";
import FloatingNavigation from "@/components/FloatingNavigation/FloatingNavigation";

// Mock Next.js Link component
vi.mock("next/link", () => {
  return {
    default: ({ children, href, ...props }: any) => (
      <a href={href} {...props}>
        {children}
      </a>
    ),
  };
});

// Mock FilterCard component
vi.mock("@/components/FilterCard/FilterCard", () => ({
  default: ({ onClose }: { onClose: () => void }) => (
    <div data-testid="filter-card">
      <button onClick={onClose}>Close</button>
    </div>
  ),
}));

const mockStore = configureStore({
  reducer: {
    theme: themeReducer,
  },
  preloadedState: {
    theme: {
      currentTheme: "light",
    },
  },
});

const renderWithProvider = (component: React.ReactElement) => {
  return render(<Provider store={mockStore}>{component}</Provider>);
};

describe("FloatingNavigation", () => {
  test("renders correctly FloatingNavigation component", () => {
    renderWithProvider(<FloatingNavigation />);

    const element = screen.getByTestId("floatingNavigation");
    expect(element).toBeTruthy();
  });

  test("renders all navigation items", () => {
    renderWithProvider(<FloatingNavigation />);

    // Check for home link
    expect(screen.getByLabelText("Beautify - Home")).toBeTruthy();

    // Check for theme toggle
    expect(screen.getByLabelText("Switch to dark mode")).toBeTruthy();

    // Check for filters button
    expect(screen.getByLabelText("Toggle filters")).toBeTruthy();

    // Check for partner button
    expect(screen.getByLabelText("Partner")).toBeTruthy();

    // Check for login link
    expect(screen.getByLabelText("Login")).toBeTruthy();
  });

  test("opens and closes filter modal", () => {
    renderWithProvider(<FloatingNavigation />);

    const filtersButton = screen.getByLabelText("Toggle filters");

    // Open modal
    fireEvent.click(filtersButton);
    expect(screen.getByTestId("filter-card")).toBeTruthy();

    // Close modal
    fireEvent.click(filtersButton);
    expect(screen.queryByTestId("filter-card")).toBeFalsy();
  });
});
