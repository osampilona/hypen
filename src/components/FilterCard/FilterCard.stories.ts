import { Meta, StoryObj } from '@storybook/react';
import FilterCard from '@/components/FilterCard/FilterCard';

interface IFilterCardProps {
  // Add your component props here
}

const meta: Meta<typeof FilterCard> = {
  title: 'Atomic components/FilterCard',
  component: FilterCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

export default meta;

type Story = StoryObj<IFilterCardProps>;
export const Default: Story = {
  args: {
      // Add your props here
  },
}
