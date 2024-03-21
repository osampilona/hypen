import type { Meta, StoryFn } from "@storybook/react";
import SubNavigationBar from "@/components/SubNavigationBar/SubNavigationBar";

const meta: Meta<typeof SubNavigationBar> = {
  title: "Atomic Components/Sub Navigation Bar",
  component: SubNavigationBar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

const Template: StoryFn = (args) => SubNavigationBar();

export const Default = Template.bind({});
Default.args = {};
