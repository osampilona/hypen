import type { Meta, StoryObj } from "@storybook/react";
import ServiceCardInfo from "@/components/ServiceCardInfo/ServiceCardInfo";

const meta: Meta = {
  title: "Atomic Components/Service card/Info",
  component: ServiceCardInfo,
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
