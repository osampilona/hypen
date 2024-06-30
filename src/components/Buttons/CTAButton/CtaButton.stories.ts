import type { Meta, StoryObj } from "@storybook/react";
import CtaButton from "@/components/Buttons/CTAButton/CtaButton";

interface ICtaButtonProps {
  label: string;
  isPrimary?: boolean;
  disabled?: boolean;
  size?: "micro" | "small" | "medium" | "large";
  icon?: React.ReactNode;
  onClick?: () => void;
}

const meta: Meta<typeof CtaButton> = {
  title: "Atomic Components/Buttons/CTA Button",
  component: CtaButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    isPrimary: { control: "boolean" },
    size: {
      control: { type: "select" },
      options: ["micro", "small", "medium", "large"],
    },
    disabled: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<ICtaButtonProps>;

export const Primary: Story = {
  args: {
    isPrimary: true,
    label: "Button",
  },
};

export const Secondary: Story = {
  args: {
    isPrimary: false,
    label: "Button",
  },
};

export const Micro: Story = {
  args: {
    size: "micro",
    label: "1",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    label: "Button",
  },
};

export const Medium: Story = {
  args: {
    size: "medium",
    label: "Button",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    label: "Button",
  },
};
