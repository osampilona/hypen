import type { Meta, StoryObj } from "@storybook/react";
import SearchButton from "@/components/SearchButton/SearchButton";

const meta: Meta = {
  title: "Atomic Components/SearchButton",
  component: SearchButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: "Search",
  },
};
