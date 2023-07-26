import type { Meta, StoryObj } from "@storybook/react";
import LinkButton, {
  ILinkButtonProps,
} from "@/components/LinkButton/LinkButton";

const meta: Meta = {
  title: "Atomic Components/Link Button",
  component: LinkButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    color: { control: "color" },
    isPrimary: { control: "boolean" },
    label: { control: "text" },
    disabled: { control: "boolean" },
  },
};

export default meta;

type Story = {
  args: ILinkButtonProps;
};

export const LinkButtonPrimary: Story = {
  args: {
    label: "Search",
    isPrimary: false,
    disabled: false,
  },
};
