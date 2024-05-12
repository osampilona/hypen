import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ServiceCard from "@/components/ServiceCard/ServiceCard";
import { StaticImageData } from "next/image";

describe("ServiceCard", () => {
  const mockImage: StaticImageData = {
    src: "/image1.jpg",
    height: 1,
    width: 1,
    blurDataURL: "",
  };

  const mockProps = {
    serviceName: "Test Service",
    serviceRate: 4.5,
    workingDays: "Mon - Fri",
    workingHours: "9:00 AM - 5:00 PM",
    serviceNote: "Note: Some service note here",
    serviceDistance: "5 miles",
    companyName: "Test Company",
    companyAddress: "123 Test St, Test City",
    companyFollowingState: true,
    companyAddressDetail: "",
    images: [
      { url: mockImage, alt: "Image 1" },
      { url: mockImage, alt: "Image 2" },
    ],
  };

  test("renders service name", () => {
    render(<ServiceCard {...mockProps} />);
    const serviceName = screen.getByText("Test Service");
    expect(serviceName).toBeTruthy();
  });

  test("renders 'No images available' if no images are provided", () => {
    const propsWithoutImages = { ...mockProps, images: [] };
    render(<ServiceCard {...propsWithoutImages} />);
    const noImagesMessage = screen.getByText("No images available");
    expect(noImagesMessage).toBeTruthy();
  });

  test("renders company name", () => {
    render(<ServiceCard {...mockProps} />);
    const companyName = screen.getAllByText("Test Company");
    expect(companyName).toBeTruthy();
  });

  //renders truncated company name

  test("renders company following state", () => {
    render(<ServiceCard {...mockProps} />);
    const companyFollowingStateIcon = screen.getAllByTestId(
      "company-following-icon",
    );
    expect(companyFollowingStateIcon).toBeTruthy();
  });

  test("renders company not following state", () => {
    const propsNotFollowing = { ...mockProps, companyFollowingState: false };
    render(<ServiceCard {...propsNotFollowing} />);
    const companyNotFollowingStateIcon = screen.getAllByTestId(
      "company-not-following-icon",
    );
    expect(companyNotFollowingStateIcon).toBeTruthy();
  });

  //renders liked state
  //renders not liked state

  //renders company address
  //renders truncated company address
});
