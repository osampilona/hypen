import { Meta, StoryObj } from '@storybook/react';
import SelectionDetailsSection from '@/components/SelectionDetailsSection/SelectionDetailsSection';

interface ISelectionDetailsSectionProps {
  // Add your component props here
}

const meta: Meta<typeof SelectionDetailsSection> = {
  title: 'Atomic components/SelectionDetailsSection',
  component: SelectionDetailsSection,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

export default meta;

type Story = StoryObj<ISelectionDetailsSectionProps>;
export const Default: Story = {
  args: {
      // Add your props here
  },
}
