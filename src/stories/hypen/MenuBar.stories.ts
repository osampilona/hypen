import { Meta, StoryObj } from "@storybook/react";
import MenuBar from "@/components/MenuBar/MenuBar";

const meta: Meta<typeof MenuBar> = {
  title: "Atomic Components/Menu Bar",
  component: MenuBar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

// Define the story
export const Default = () => MenuBar();
