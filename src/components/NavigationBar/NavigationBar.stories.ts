import type { Meta, StoryFn } from "@storybook/react";
import NavigationBar from "@/components/NavigationBar/NavigationBar";

interface INavigationBarProps {
  labelPartner?: string;
  // Add other NavigationBar props here
}

const meta: Meta<typeof NavigationBar> = {
  title: "Atomic Components/Navigation Bar",
  component: NavigationBar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

const Template: StoryFn<INavigationBarProps> = (args) =>
  NavigationBar({ ...args, labelPartner: args.labelPartner || "" });

export const Default = Template.bind({});
Default.args = {
  labelPartner: "Become a Partner",
};
