import { Meta, StoryObj } from '@storybook/react';
import Overlay from '@/components/Overlay/Overlay';

interface IOverlayProps {
  // Add your component props here
}

const meta: Meta<typeof Overlay> = {
  title: 'Atomic components/Overlay',
  component: Overlay,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

export default meta;

type Story = StoryObj<IOverlayProps>;
export const Default: Story = {
  args: {
      // Add your props here
  },
}
