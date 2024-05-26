import type { Meta, StoryObj } from "@storybook/react";
import NavigationBar from "@/components/NavigationBar/NavigationBar";

interface INavigationBarProps {
  labelPartner?: string;
  // Add other NavigationBar props here
}

const meta: Meta<typeof NavigationBar> = {
  title: "Atomic Components/Navigation Bar",
  component: NavigationBar,
  parameters: {},
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<INavigationBarProps>;

export const Default: Story = {
  args: {
    labelPartner: "Become a Partner",
  },
};
