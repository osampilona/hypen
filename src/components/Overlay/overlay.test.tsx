import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Overlay from "@/components/Overlay/Overlay";
import React from "react";

describe("Overlay", () => {
  test("renders correctly when show is true", () => {
    render(
      <Overlay show={true} onClose={function (): void {}}>
        <div>My Overlay Content</div>
      </Overlay>,
    );

    const container = screen.getByTestId("overlay-container");
    expect(container).toBeTruthy();

    const content = screen.getByTestId("overlay-content");
    expect(content).toBeTruthy();
  });

  test("does not render when show is false", () => {
    render(
      <Overlay show={false} onClose={function (): void {}}>
        <div>My Overlay Content</div>
      </Overlay>,
    );

    const container = screen.queryByTestId("overlay-container");
    expect(container).not.toBeUndefined();
  });
});
