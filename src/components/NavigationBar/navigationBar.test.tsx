// navigationBar.test.tsx
import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import NavigationBar from "@/components/NavigationBar/NavigationBar";

describe("NavigationBar", () => {
  test("renders correctly", () => {
    const { container } = render(
      <NavigationBar labelPartner="Become a partner" />,
    );
    expect(container).toMatchSnapshot();
  });

  test("renders the labelPartner correctly", () => {
    render(<NavigationBar labelPartner="Become a partner" />);
    const labelPartners = screen.getAllByText("Become a partner");
    expect(labelPartners.length).toBeGreaterThan(0);
  });
});
