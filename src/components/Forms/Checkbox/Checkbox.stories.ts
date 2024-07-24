import { Meta, StoryObj } from "@storybook/react";
import Checkbox from "@/components/Forms/Checkbox/Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Atomic components/Forms/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    isDisabled: {
      control: "boolean",
      description: "Indicates if the checkbox is disabled",
    },
    label: {
      control: "text",
      description: "Label for the checkbox",
    },
    isRequired: {
      control: "boolean",
      description: "Indicates if the checkbox is required",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;
export const Default: Story = {
  args: {
    isDisabled: false,
    isRequired: true,
    label: "Checkbox",
  },
};
