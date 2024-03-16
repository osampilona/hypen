import type { Meta, StoryFn } from "@storybook/react";
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

const Template: StoryFn<ILinkButtonProps> = (args) => LinkButton(args);

export const LinkButtonPrimary = Template.bind({});
LinkButtonPrimary.args = {
  label: "Search",
  isPrimary: false,
  disabled: false,
};
