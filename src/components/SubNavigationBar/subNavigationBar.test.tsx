import { describe, test, expect } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import SubNavigationBar from "@/components/SubNavigationBar/SubNavigationBar";
import { HiOutlineUserCircle } from "react-icons/hi";

describe("SubNavigationBar", () => {
  test("renders links correctly", async () => {
    // Ensure it's async
    const items = [
      {
        serviceLink: "/service1",
        serviceLabel: "Service 1",
        serviceIcon: HiOutlineUserCircle,
      },
      {
        serviceLink: "/service2",
        serviceLabel: "Service 2",
        serviceIcon: HiOutlineUserCircle,
      },
    ];

    render(<SubNavigationBar items={items} />);

    // Wait for the component to render and the icons to be present
    await waitFor(() => {
      // Check if the container is rendered
      expect(screen.getByTestId("subnavigation-bar")).toBeTruthy();

      // Check if each link is rendered with correct label and icon
      items.forEach((item, index) => {
        const link = screen.getByText(item.serviceLabel);
        expect(link).toBeTruthy();
        expect(link.getAttribute("href")).toBe(item.serviceLink);

        const icon = screen.getByTestId(`subnavigation-icon-${index}`);
        expect(icon).toBeTruthy();
      });
    });
  });
});
