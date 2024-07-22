import { Meta, StoryObj } from '@storybook/react';
import Histogram from '@/components/Histogram/Histogram';

interface IHistogramProps {
  // Add your component props here
}

const meta: Meta<typeof Histogram> = {
  title: 'Atomic components/Histogram',
  component: Histogram,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

export default meta;

type Story = StoryObj<IHistogramProps>;
export const Default: Story = {
  args: {
      // Add your props here
  },
}
