import { Meta, StoryObj } from "@storybook/react";
import LocationSearchInputField from "@/components/Forms/LocationSearchInputField/LocationSearchInputField";

interface ILocationSearchInputFieldProps {
  // Add your component props here
}

const meta: Meta<typeof LocationSearchInputField> = {
  title: "Atomic components/Forms/LocationSearchInputField",
  component: LocationSearchInputField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<ILocationSearchInputFieldProps>;
export const Default: Story = {
  args: {
    // Add your props here
  },
};
