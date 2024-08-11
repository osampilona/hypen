import { Meta, StoryObj } from '@storybook/react';
import FilterActionsButtons from '@/components/FilterActionsButtons/FilterActionsButtons';

interface IFilterActionsButtonsProps {
  // Add your component props here
}

const meta: Meta<typeof FilterActionsButtons> = {
  title: 'Atomic components/FilterActionsButtons',
  component: FilterActionsButtons,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

export default meta;

type Story = StoryObj<IFilterActionsButtonsProps>;
export const Default: Story = {
  args: {
      // Add your props here
  },
}
