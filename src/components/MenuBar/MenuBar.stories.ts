import type { Meta, StoryFn } from "@storybook/react";
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

const Template: StoryFn = () => MenuBar();

export const Default = Template.bind({});
