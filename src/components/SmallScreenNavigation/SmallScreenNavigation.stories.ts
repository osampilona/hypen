import { Meta, StoryObj } from "@storybook/react";
import SmallScreenNavigation from "@/components/SmallScreenNavigation/SmallScreenNavigation";

interface ISmallScreenNavigationProps {
  // Add your component props here
}

const meta: Meta<typeof SmallScreenNavigation> = {
  title: "Atomic components/SmallScreenNavigation",
  component: SmallScreenNavigation,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<ISmallScreenNavigationProps>;
export const Default: Story = {
  args: {
    // Add your props here
  },
};
