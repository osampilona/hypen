import type { Meta, StoryFn } from "@storybook/react";
import CtaButton from "@/components/Buttons/CTAButton/CtaButton";

interface ICtaButtonProps {
  label: string;
  buttonType?: "primary" | "secondary";
  disabled?: boolean;
  backgroundColor?: string;
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
    backgroundColor: { control: "color" },
    buttonType: {
      control: { type: "select" },
      options: ["primary", "secondary"],
    },
    size: {
      control: { type: "select" },
      options: ["micro", "small", "medium", "large"],
    },
    disabled: { control: "boolean" },
  },
};

export default meta;

const Template: StoryFn<ICtaButtonProps> = (args) => CtaButton(args);

export const Primary = Template.bind({});
Primary.args = {
  buttonType: "primary",
  label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  buttonType: "secondary",
  label: "Button",
};

export const Micro = Template.bind({});
Micro.args = {
  size: "micro",
  label: "1",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button",
};

export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
  label: "Button",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button",
};
