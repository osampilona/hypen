import { Meta, StoryObj } from '@storybook/react';
import TimeSlotsSelector from '@/components/TimeSlotsSelector/TimeSlotsSelector';

interface ITimeSlotsSelectorProps {
  // Add your component props here
}

const meta: Meta<typeof TimeSlotsSelector> = {
  title: 'Atomic components/TimeSlotsSelector',
  component: TimeSlotsSelector,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

export default meta;

type Story = StoryObj<ITimeSlotsSelectorProps>;
export const Default: Story = {
  args: {
      // Add your props here
  },
}
