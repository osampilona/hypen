import { Meta, StoryObj } from '@storybook/react';
import Accordion from '@/components/Accordion/Accordion';

interface IAccordionProps {
  // Add your component props here
}

const meta: Meta<typeof Accordion> = {
  title: 'Atomic components/Accordion',
  component: Accordion,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

export default meta;

type Story = StoryObj<IAccordionProps>;
export const Default: Story = {
  args: {
      // Add your props here
  },
}
