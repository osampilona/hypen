import type { Meta, StoryObj } from "@storybook/react";
import ServiceCard from "@/components/ServiceCard/ServiceCard";
import img_1 from "../../assets/img/image_1.jpeg";
import img_2 from "../../assets/img/image_2.jpeg";
import img_3 from "../../assets/img/image_3.jpeg";

interface IServiceCardProps {
  serviceName: string;
  serviceRate: number;
  workingDays: string;
  workingHours: string;
  serviceNote: string;
  serviceDistance: string;
  companyName: string;
  companyAddress: string;
  companyFollowingState: string;
  companyAddressDetail: string;
  images: { url: string; alt: string }[];
}

const meta: Meta<typeof ServiceCard> = {
  title: "Atomic Components/Service Card",
  component: ServiceCard,
  parameters: {},
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<IServiceCardProps>;

export const Default: Story = {
  args: {
    serviceName: "makeup",
    serviceRate: 4.5,
    workingDays: "Monday - Friday",
    workingHours: "09:00 - 18:00",
    serviceNote: "Please make an appointment before coming.",
    serviceDistance: "1.5 km",
    companyName: "Hypen",
    companyAddress: "Hannemans Allé 4A",
    companyFollowingState: "Following",
    companyAddressDetail: "",
    images: [
      { url: img_1.src, alt: "makeup" },
      { url: img_2.src, alt: "makeup" },
      { url: img_3.src, alt: "makeup" },
    ],
  },
};
