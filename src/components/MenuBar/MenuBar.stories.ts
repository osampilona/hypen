import type { Meta, StoryObj } from "@storybook/react";
import MenuBar from "@/components/MenuBar/MenuBar";

const meta: Meta<typeof MenuBar> = {
  title: "Atomic Components/Menu Bar",
  component: MenuBar,
  parameters: {
    layout: "centered",
    viewport: {
      defaultViewport: "tablet",
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof MenuBar>;

export const Default: Story = {
  render: () => MenuBar(),
};
