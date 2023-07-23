import type { Meta, StoryObj } from "@storybook/react";
import CtaButton, { ICtaButtonProps } from "@/components/CTAButton/CtaButton";

const meta: Meta = {
  title: "Atomic Components/CtaButton",
  component: CtaButton,
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
  args: ICtaButtonProps;
};

export const Primary: Story = {
  args: {
    buttonType: "primary",
    label: "Button",
  },
};

export const Secondary: Story = {
  args: {
    buttonType: "secondary",
    label: "Button",
  },
};

export const TextButton: Story = {
  args: {
    size: "text-button",
    label: "See more",
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
