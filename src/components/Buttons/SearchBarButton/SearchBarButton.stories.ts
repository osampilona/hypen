import { Meta, StoryObj } from "@storybook/react";
import SearchBarButton from "@/components/Buttons/SearchBarButton/SearchBarButton";

interface ISearchBarButtonProps {
  // Add your component props here
}

const meta: Meta<typeof SearchBarButton> = {
  title: "Atomic components/SearchBarButton",
  component: SearchBarButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<ISearchBarButtonProps>;
export const Default: Story = {
  args: {
    // Add your props here
  },
};
