import type { Meta, StoryObj } from "@storybook/react";
import ServiceCard from "@/components/ServiceCard/ServiceCard";
import type { ServiceCardType } from "@/types/services/card";

const meta: Meta = {
  title: "Atomic Components/Service card",
  component: ServiceCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

export default meta;
type Story = {
  args: ServiceCardType;
};

export const Default: Story = {
  args: {} as ServiceCardType,
};
