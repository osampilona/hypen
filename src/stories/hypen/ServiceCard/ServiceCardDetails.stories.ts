import type { Meta, StoryObj } from "@storybook/react";
import ServiceCardDetails from "@/components/ServiceCardDetails/ServiceCardDetails";

const meta: Meta = {
  title: "Atomic Components/Service card/Details",
  component: ServiceCardDetails,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

export default meta;
type Story = {};

export const Default: Story = {
  args: {},
};
