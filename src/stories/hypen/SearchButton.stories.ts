import { Meta } from "@storybook/react";
import SearchButton, {
  ISearchButtonProps,
} from "@/components/SearchButton/SearchButton";
import * as CtaButtonStories from "./CtaButton.stories"; // Import CtaButton stories

const meta: Meta = {
  title: "Atomic Components/SearchButton",
  component: SearchButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    // Define the argTypes for SearchButton here
    backgroundColor: { control: "color" },
    isPrimary: { control: "boolean" }, // Add the isSecondary control
    label: { control: "text" }, // Add the label control
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
    size: "medium",
    disabled: false,
  },
};
