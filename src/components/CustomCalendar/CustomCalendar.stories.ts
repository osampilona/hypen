import { Meta, StoryObj } from '@storybook/react';
import CustomCalendar from '@/components/CustomCalendar/CustomCalendar';

interface ICustomCalendarProps {
  // Add your component props here
}

const meta: Meta<typeof CustomCalendar> = {
  title: 'Atomic components/CustomCalendar',
  component: CustomCalendar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

export default meta;

type Story = StoryObj<ICustomCalendarProps>;
export const Default: Story = {
  args: {
      // Add your props here
  },
}
