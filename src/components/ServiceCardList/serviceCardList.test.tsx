// ServiceCardList.test.js

import { describe, test, expect, beforeEach, afterEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import ServiceCardList from "./ServiceCardList";
import SkeletonCardList from "../Skeletons/SkeletonCardList/SkeletonCardList";

describe("ServiceCardList component", () => {
  test("Should render the ServiceCardList component", () => {
    render(<ServiceCardList />);
    expect(screen.getByTestId("service-card-list")).toBeTruthy();
  });

  test("Should render the SkeletonCardList component", () => {
    render(<SkeletonCardList skeletonArray={[1, 2, 3]} />);
  });
});
