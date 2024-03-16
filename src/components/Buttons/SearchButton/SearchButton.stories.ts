import type { Meta, StoryFn } from "@storybook/react";
import SearchButton, {
  ISearchButtonProps,
} from "@/components/Buttons/SearchButton/SearchButton";

const meta: Meta = {
  title: "Atomic Components/Buttons/Search Button",
  component: SearchButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
    isPrimary: { control: "boolean" },
    label: { control: "text" },
    size: { control: "radio" },
    disabled: { control: "boolean" },
  },
};

export default meta;

const Template: StoryFn<ISearchButtonProps> = (args) => SearchButton(args);

export const SearchButtonPrimary = Template.bind({});
SearchButtonPrimary.args = {
  isPrimary: false,
  label: "Search",
  size: "small",
  disabled: false,
};
