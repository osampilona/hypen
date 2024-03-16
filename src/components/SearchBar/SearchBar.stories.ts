import type { Meta, StoryFn } from "@storybook/react";
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

const Template: StoryFn<ISearchBarProps> = (args) => SearchBar({ ...args });

export const Default = Template.bind({});
Default.args = {
  labelWhat: "What",
  labelWhere: "Where",
  labelWhen: "When",
};
