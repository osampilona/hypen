import { Meta, StoryObj } from '@storybook/react';
import AccordionList from '@/components/AccordionList/AccordionList';

interface IAccordionListProps {
  // Add your component props here
}

const meta: Meta<typeof AccordionList> = {
  title: 'Atomic components/AccordionList',
  component: AccordionList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

export default meta;

type Story = StoryObj<IAccordionListProps>;
export const Default: Story = {
  args: {
      // Add your props here
  },
}
