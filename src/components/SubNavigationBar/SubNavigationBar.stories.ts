import type { Meta, StoryObj } from "@storybook/react";
import SubNavigationBar from "@/components/SubNavigationBar/SubNavigationBar";

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
  render: () => SubNavigationBar(),
};
