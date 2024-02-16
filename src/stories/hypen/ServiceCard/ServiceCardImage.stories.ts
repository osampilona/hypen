import type { Meta, StoryObj } from "@storybook/react";
import ServiceCardImage from "@/components/ServiceCardImage/ServiceCardImage";

const meta: Meta = {
  title: "Atomic Components/Service card/Image",
  component: ServiceCardImage,
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
