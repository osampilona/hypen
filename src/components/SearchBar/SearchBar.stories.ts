import type { Meta, StoryObj } from "@storybook/react";
import SearchBar, { ISearchBarProps } from "@/components/SearchBar/SearchBar";

const meta: Meta<typeof SearchBar> = {
  title: "Atomic Components/Search Bar",
  component: SearchBar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<ISearchBarProps>;

export const Default: Story = {
  args: {
    labelWhat: "What",
    labelWhere: "Where",
    labelWhen: "When",
  },
};
