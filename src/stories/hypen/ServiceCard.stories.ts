import type { Meta, StoryObj } from "@storybook/react";
import ServiceCard, {
  IServiceCardProps,
} from "@/components/ServiceCard/ServiceCard";

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
  args: IServiceCardProps;
};

export const Default: Story = {
  args: {},
};
