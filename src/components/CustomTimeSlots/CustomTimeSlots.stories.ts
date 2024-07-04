import { Meta, StoryObj } from "@storybook/react";
import CustomTimeSlots from "@/components/CustomTimeSlots/CustomTimeSlots";

interface ICustomTimeSlotsProps {
  // Add your component props here
}

const meta: Meta<typeof CustomTimeSlots> = {
  title: "Atomic components/CustomTimeSlots",
  component: CustomTimeSlots,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<ICustomTimeSlotsProps>;
export const Default: Story = {
  args: {
    // Add your props here
  },
};
