import { Meta, StoryObj } from '@storybook/react';
import CategoriesList from '@/components/CategoriesList/CategoriesList';

interface ICategoriesListProps {
  // Add your component props here
}

const meta: Meta<typeof CategoriesList> = {
  title: 'Atomic components/CategoriesList',
  component: CategoriesList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

export default meta;

type Story = StoryObj<ICategoriesListProps>;
export const Default: Story = {
  args: {
      // Add your props here
  },
}
