import { describe, test, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "@/lib/store"; // Use your actual store configuration
import NavigationBar from "@/components/NavigationBar/NavigationBar";

describe("NavigationBar", () => {
  test("renders correctly", () => {
    const { container } = render(
      <Provider store={store}>
        <NavigationBar labelPartner="Become a partner" />
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });

  test("renders the labelPartner correctly", () => {
    render(
      <Provider store={store}>
        <NavigationBar labelPartner="Become a partner" />
      </Provider>,
    );
    const labelPartners = screen.getAllByText("Become a partner");
    expect(labelPartners.length).toBeGreaterThan(0);
  });

  test("renders user icon", () => {
    render(
      <Provider store={store}>
        <NavigationBar labelPartner="Become a partner" />
      </Provider>,
    );
    const userIcon = screen.queryAllByLabelText("profile-icon");
    expect(userIcon).toBeTruthy();
  });

  test("toggles theme correctly", () => {
    render(
      <Provider store={store}>
        <NavigationBar labelPartner="Become a partner" />
      </Provider>,
    );

    // Initial theme should be light
    expect(document.body.classList.contains("dark-theme")).toBe(false);

    // Click the theme toggle button
    const themeToggleButton = screen.getAllByRole("button")[0]; // Adjust selector if needed
    fireEvent.click(themeToggleButton);

    // After clicking, theme should be dark
    expect(document.body.classList.contains("dark-theme")).toBe(true);

    // Click the theme toggle button again
    fireEvent.click(themeToggleButton);

    // After clicking again, theme should be light
    expect(document.body.classList.contains("dark-theme")).toBe(false);
  });
});
