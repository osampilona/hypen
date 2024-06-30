import { Meta, StoryObj } from "@storybook/react";
import SearchBarButton, {
  ISearchBarButtonProps,
} from "@/components/Buttons/SearchBarButton/SearchBarButton";

const meta: Meta<typeof SearchBarButton> = {
  title: "Atomic components/Buttons/SearchBarButton",
  component: SearchBarButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    isLabelClicked: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<ISearchBarButtonProps>;
export const Default: Story = {
  args: {
    label: "What",
    icon: "🔍",
    isLabelClicked: false,
  },
};
