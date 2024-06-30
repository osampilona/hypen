import type { Meta, StoryObj } from "@storybook/react";
import NavigationBar from "@/components/NavigationBar/NavigationBar";

interface INavigationBarProps {
  labelPartner?: string;
  isSimpleNavbar?: boolean;
}

const meta: Meta<typeof NavigationBar> = {
  title: "Atomic Components/Navigation Bar",
  component: NavigationBar,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {
    labelPartner: { control: "text" },
    isSimpleNavbar: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<INavigationBarProps>;

export const Default: Story = {
  args: {
    labelPartner: "Become a Partner",
    isSimpleNavbar: false,
  },
};
