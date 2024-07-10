import { Meta, StoryObj } from "@storybook/react";
import ItemsList from "@/components/ItemsList/ItemsList";

interface IItemsListProps {
  items: { text: string; href: string }[];
  onItemClicked?: () => void;
}

const meta: Meta<typeof ItemsList> = {
  title: "Atomic components/ItemsList",
  component: ItemsList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<IItemsListProps>;
export const Default: Story = {
  args: {
    items: [
      { text: "Home", href: "/" },
      { text: "About", href: "/about" },
      { text: "Contact", href: "/contact" },
    ],
  },
};
