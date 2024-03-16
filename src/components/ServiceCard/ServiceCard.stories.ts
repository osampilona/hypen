import type { Meta, StoryFn } from "@storybook/react";
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
  companyAdress: string; // Typo here? companyAdress -> companyAddress
  companyFollowingState: string;
  companyAdressDetail: string; // Typo here? companyAdressDetail -> companyAddressDetail
  images: { url: string; alt: string }[];
}

const meta: Meta<typeof ServiceCard> = {
  title: "Atomic Components/Service Card",
  component: ServiceCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

const Template: StoryFn<IServiceCardProps> = (args) =>
  ServiceCard({
    ...args,
    images: [
      {
        url: img_1,
        alt: "makeup",
      },
      {
        url: img_2,
        alt: "makeup",
      },
      {
        url: img_3,
        alt: "makeup",
      },
    ],
  });

export const Default = Template.bind({});
Default.args = {
  serviceName: "makeup",
  serviceRate: 4.5,
  workingDays: "Monday - Friday",
  workingHours: "09:00 - 18:00",
  serviceNote: "Please make an appointment before coming.",
  serviceDistance: "1.5 km",
  companyName: "Hypen",
  companyAdress: "Hannemans Allé 4A",
  companyFollowingState: "Following",
  companyAdressDetail: "",
  images: [
    {
      url: img_1.toString(),
      alt: "makeup",
    },
    {
      url: img_2.toString(),
      alt: "makeup",
    },
    {
      url: img_3.toString(),
      alt: "makeup",
    },
  ],
};
