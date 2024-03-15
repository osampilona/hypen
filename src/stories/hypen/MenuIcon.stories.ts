import type { Meta, StoryObj } from "@storybook/react";
import MenuIcon, { IMenuIconProps } from "@/components/MenuIcon/MenuIcon";
import { GoHeart } from "react-icons/go";
import { ReactNode } from "react";

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
  children: ReactNode;
};

export const Default: Story = {
  args: {
    children: GoHeart as unknown as ReactNode,
  },
  children: GoHeart as unknown as ReactNode,
};
