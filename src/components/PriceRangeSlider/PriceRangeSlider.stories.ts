import { Meta, StoryObj } from '@storybook/react';
import PriceRangeSlider from '@/components/PriceRangeSlider/PriceRangeSlider';

interface IPriceRangeSliderProps {
  // Add your component props here
}

const meta: Meta<typeof PriceRangeSlider> = {
  title: 'Atomic components/PriceRangeSlider',
  component: PriceRangeSlider,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

export default meta;

type Story = StoryObj<IPriceRangeSliderProps>;
export const Default: Story = {
  args: {
      // Add your props here
  },
}
