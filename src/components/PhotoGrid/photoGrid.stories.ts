import { Meta, StoryObj } from '@storybook/react';
import PhotoGrid from '@/components/PhotoGrid/PhotoGrid';

interface IPhotoGridProps {
  // Add your component props here
}

const meta: Meta<typeof PhotoGrid> = {
  title: 'Atomic components/PhotoGrid',
  component: PhotoGrid,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

export default meta;

type Story = StoryObj<IPhotoGridProps>;
export const Default: Story = {
  args: {
      // Add your props here
  },
}
