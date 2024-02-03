import { Meta } from "@storybook/react";
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

// Define the story
export const Default = () => MenuBar();
