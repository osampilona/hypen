import { Meta, StoryObj } from "@storybook/react";
import CheckboxItemsList from "@/components/Forms/CheckboxItemsList/CheckboxItemsList";

interface ICheckboxItemsListProps {
  // Add your component props here
}

const meta: Meta<typeof CheckboxItemsList> = {
  title: "Atomic components/Forms/CheckboxItemsList",
  component: CheckboxItemsList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<ICheckboxItemsListProps>;
export const Default: Story = {
  args: {
    // Add your props here
  },
};
