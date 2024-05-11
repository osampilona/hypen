import type { Meta, StoryObj } from "@storybook/react";
import SubNavigationBar from "@/components/SubNavigationBar/SubNavigationBar";
import { RxScissors } from "react-icons/rx";
import { GiEyelashes } from "react-icons/gi";
import { FiSun } from "react-icons/fi";
import { TbMassage } from "react-icons/tb";
import { LiaHatCowboySideSolid } from "react-icons/lia";
import { BsBrush } from "react-icons/bs";

const meta: Meta<typeof SubNavigationBar> = {
  title: "Atomic Components/Sub Navigation Bar",
  component: SubNavigationBar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof SubNavigationBar>;

export const Default: Story = {
  args: {
    items: [
      { serviceLink: "/#", serviceLabel: "Hair", serviceIcon: RxScissors },
      { serviceLink: "/#", serviceLabel: "Lashes", serviceIcon: GiEyelashes },
      { serviceLink: "/#", serviceLabel: "Massage", serviceIcon: TbMassage },
      { serviceLink: "/#", serviceLabel: "Tanning", serviceIcon: FiSun },
      {
        serviceLink: "/#",
        serviceLabel: "Barber",
        serviceIcon: LiaHatCowboySideSolid,
      },
      { serviceLink: "/#", serviceLabel: "Beauty", serviceIcon: BsBrush },
    ],
  },
};
