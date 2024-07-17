import { Meta, StoryObj } from "@storybook/react";
import HamburgerMenuButton from "@/components/Buttons/HamburgerMenuButton/HamburgerMenuButton";

interface IHamburgerMenuButtonProps {
  // Add your component props here
}

const meta: Meta<typeof HamburgerMenuButton> = {
  title: "Atomic components/Buttons/HamburgerMenuButton",
  component: HamburgerMenuButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<IHamburgerMenuButtonProps>;
export const Default: Story = {
  args: {
    // Add your props here
  },
};
