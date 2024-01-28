import type { Meta, StoryObj } from "@storybook/react";
import MenuIcon, { IMenuIconProps } from "@/components/MenuIcon/MenuIcon";
import FeedIcon from "@/icons/FeedIcon";

const meta: Meta = {
  title: "Atomic Components/Menu Icon",
  component: MenuIcon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = {
  args: IMenuIconProps;
};

export const Default: Story = {
  args: {
    children: FeedIcon(),
    label: "Feed",
  },
};
