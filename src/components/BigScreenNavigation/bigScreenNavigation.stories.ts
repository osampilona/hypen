import { Meta, StoryObj } from '@storybook/react';
import BigScreenNavigation from '@/components/BigScreenNavigation/BigScreenNavigation';

interface IBigScreenNavigationProps {
  // Add your component props here
}

const meta: Meta<typeof BigScreenNavigation> = {
  title: 'Atomic components/BigScreenNavigation',
  component: BigScreenNavigation,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

export default meta;

type Story = StoryObj<IBigScreenNavigationProps>;
export const Default: Story = {
  args: {
      // Add your props here
  },
}
