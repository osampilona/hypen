import { Meta, StoryObj } from '@storybook/react';
import TimeSelection from '@/components/TimeSelection/TimeSelection';

interface ITimeSelectionProps {
  // Add your component props here
}

const meta: Meta<typeof TimeSelection> = {
  title: 'Atomic components/TimeSelection',
  component: TimeSelection,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

export default meta;

type Story = StoryObj<ITimeSelectionProps>;
export const Default: Story = {
  args: {
      // Add your props here
  },
}
