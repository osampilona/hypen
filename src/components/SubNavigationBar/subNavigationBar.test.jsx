import React from "react";
import { render, screen } from "@testing-library/react";
import SubNavigationBar from "@/components/SubNavigationBar/SubNavigationBar";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";

jest.mock("next/link", () => {
  const MockedLink = ({ children, href }) => <a href={href}>{children}</a>;
  MockedLink.displayName = "MockedLink";
  return {
    __esModule: true,
    default: MockedLink,
  };
});

// Mock for react-icons
const MockIcon = ({ size }) => (
  <svg data-testid="service-icon" height={size} width={size} />
);
MockIcon.displayName = "MockIcon";

describe("SubNavigationBar", () => {
  const items = [
    { serviceLink: "/", serviceLabel: "Hair", serviceIcon: MockIcon },
    { serviceLink: "/", serviceLabel: "Nails", serviceIcon: MockIcon },
  ];

  it("renders without crashing", () => {
    render(<SubNavigationBar items={items} />, { wrapper: Router });
    const subNav = screen.getByTestId("subnavigation-bar");
    expect(subNav).toBeInTheDocument();
  });

  it("displays all links based on provided items", () => {
    render(<SubNavigationBar items={items} />, { wrapper: Router });
    const links = screen.getAllByRole("link");
    expect(links.length).toBe(items.length);
    expect(links[0]).toHaveAttribute("href", items[0].serviceLink);
    expect(links[1]).toHaveAttribute("href", items[1].serviceLink);
    expect(screen.getByText(items[0].serviceLabel)).toBeInTheDocument();
    expect(screen.getByText(items[1].serviceLabel)).toBeInTheDocument();
  });

  it("renders icons for each item", () => {
    render(<SubNavigationBar items={items} />, { wrapper: Router });
    const icons = document.querySelectorAll("svg");
    expect(icons.length).toBe(items.length);
  });
});
