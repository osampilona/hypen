import { Meta, StoryObj } from "@storybook/react";
import SuggestionsList from "@/components/Forms/SuggestionsList/SuggestionsList";

interface ISuggestionsListProps {
  // Add your component props here
}

const meta: Meta<typeof SuggestionsList> = {
  title: "Atomic components/Forms/SuggestionsList",
  component: SuggestionsList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<ISuggestionsListProps>;
export const Default: Story = {
  args: {
    // Add your props here
  },
};
