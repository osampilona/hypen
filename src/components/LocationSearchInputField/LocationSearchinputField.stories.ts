import { Meta, StoryObj } from '@storybook/react';
import LocationSearchinputField from '@/components/LocationSearchinputField/LocationSearchinputField';

interface ILocationSearchinputFieldProps {
  // Add your component props here
}

const meta: Meta<typeof LocationSearchinputField> = {
  title: 'Atomic components/LocationSearchinputField',
  component: LocationSearchinputField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

export default meta;

type Story = StoryObj<ILocationSearchinputFieldProps>;
export const Default: Story = {
  args: {
      // Add your props here
  },
}
