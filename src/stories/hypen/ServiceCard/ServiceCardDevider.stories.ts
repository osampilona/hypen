import type { Meta, StoryObj } from "@storybook/react";
import ServiceCardDevider from "@/components/ServiceCardDevider/ServiceCardDevider";

const meta: Meta = {
  title: "Atomic Components/Service card/Devider",
  component: ServiceCardDevider,
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
