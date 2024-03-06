import type { Meta, StoryObj } from "@storybook/react";
import ServiceCardList from "@/components/ServiceCardList/ServiceCardList";

const meta: Meta = {
  title: "Atomic Components/Service card list",
  component: ServiceCardList,
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
