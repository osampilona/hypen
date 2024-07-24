import { Meta, StoryObj } from '@storybook/react';
import InputField from '@/components/InputField/InputField';

interface IInputFieldProps {
  // Add your component props here
}

const meta: Meta<typeof InputField> = {
  title: 'Atomic components/InputField',
  component: InputField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

export default meta;

type Story = StoryObj<IInputFieldProps>;
export const Default: Story = {
  args: {
      // Add your props here
  },
}
