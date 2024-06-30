import type { Meta, StoryObj } from "@storybook/react";
import SearchButton, {
  ISearchButtonProps,
} from "@/components/Buttons/SearchButton/SearchButton";

const meta: Meta<typeof SearchButton> = {
  title: "Atomic Components/Buttons/Search Button",
  component: SearchButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    isPrimary: { control: "boolean" },
    label: { control: "text" },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    disabled: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<ISearchButtonProps>;

export const SearchButtonPrimary: Story = {
  args: {
    isPrimary: true,
    label: "Search",
    size: "small",
    disabled: false,
  },
};
