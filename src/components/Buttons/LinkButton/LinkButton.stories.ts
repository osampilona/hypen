import type { Meta, StoryObj } from "@storybook/react";
import LinkButton from "@/components/Buttons/LinkButton/LinkButton";

interface ILinkButtonProps {
  color?: string;
  isPrimary?: boolean;
  label: string;
  disabled?: boolean;
}

const meta: Meta<typeof LinkButton> = {
  title: "Atomic Components/Buttons/Link Button",
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

type Story = StoryObj<ILinkButtonProps>;

export const LinkButtonPrimary: Story = {
  args: {
    label: "Search",
    isPrimary: true,
    disabled: false,
  },
};
