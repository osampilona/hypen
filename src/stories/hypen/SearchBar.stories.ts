import type { Meta, StoryObj } from "@storybook/react";
import SearchBar, { ISearchBarProps } from "@/components/SearchBar/SearchBar";

const meta: Meta = {
  title: "Atomic Components/Search Bar",
  component: SearchBar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

export default meta;
type Story = {
  args: ISearchBarProps;
};

export const Default: Story = {
  args: {
    labelWhat: "What",
    labelWhere: "Where",
    labelWhen: "When",
  },
};
