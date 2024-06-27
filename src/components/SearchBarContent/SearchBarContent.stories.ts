import { Meta, StoryObj } from '@storybook/react';
import SearchBarContent from '@/components/SearchBarContent/SearchBarContent';

interface ISearchBarContentProps {
  // Add your component props here
}

const meta: Meta<typeof SearchBarContent> = {
  title: 'Atomic components/SearchBarContent',
  component: SearchBarContent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

export default meta;

type Story = StoryObj<ISearchBarContentProps>;
export const Default: Story = {
  args: {
      // Add your props here
  },
}
