import { Meta, StoryObj } from '@storybook/react';
import DistanceRangeSlider from '@/components/DistanceRangeSlider/DistanceRangeSlider';

interface IDistanceRangeSliderProps {
  // Add your component props here
}

const meta: Meta<typeof DistanceRangeSlider> = {
  title: 'Atomic components/DistanceRangeSlider',
  component: DistanceRangeSlider,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

export default meta;

type Story = StoryObj<IDistanceRangeSliderProps>;
export const Default: Story = {
  args: {
      // Add your props here
  },
}
