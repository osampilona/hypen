import type { Meta, StoryObj } from "@storybook/react";
import ServiceCardBusiness from "@/components/ServiceCardBusiness/ServiceCardBusiness";

const meta: Meta = {
  title: "Atomic Components/Service card/Business",
  component: ServiceCardBusiness,
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
