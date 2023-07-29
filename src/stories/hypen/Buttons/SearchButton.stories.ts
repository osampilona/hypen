import { Meta } from "@storybook/react";
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
    // Define the argTypes for SearchButton here
    backgroundColor: { control: "color" },
    isPrimary: { control: "boolean" },
    label: { control: "text" },
    size: { control: "radio" },
    disabled: { control: "boolean" },
  },
};

export default meta;

type Story = {
  args: ISearchButtonProps;
};

export const SearchButtonPrimary: Story = {
  args: {
    isPrimary: false,
    label: "Search",
    size: "small",
    disabled: false,
  },
};
