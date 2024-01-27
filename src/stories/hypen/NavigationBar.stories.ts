import type { Meta, StoryObj } from "@storybook/react";
import NavigationBar, {
  INavigationBarProps,
} from "@/components/NavigationBar/NavigationBar";

const meta: Meta = {
  title: "Atomic Components/Navigation Bar",
  component: NavigationBar,
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
  args: INavigationBarProps;
};

export const Default: Story = {
  args: {
    labelPartner: "Became a Partner",
  },
};
