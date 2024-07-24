import { Meta, StoryObj } from '@storybook/react';
import CustomInputField from '@/components/CustomInputField/CustomInputField';

interface ICustomInputFieldProps {
  // Add your component props here
}

const meta: Meta<typeof CustomInputField> = {
  title: 'Atomic components/CustomInputField',
  component: CustomInputField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

export default meta;

type Story = StoryObj<ICustomInputFieldProps>;
export const Default: Story = {
  args: {
      // Add your props here
  },
}
