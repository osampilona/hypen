import type { Meta, StoryFn } from "@storybook/react";
import ServiceCardList from "@/components/ServiceCardList/ServiceCardList";
import type { ServiceCardType } from "@/types/services/card";

interface IServiceCardListProps {
  cards: ServiceCardType[];
}

const meta: Meta<typeof ServiceCardList> = {
  title: "Atomic Components/Service Card List",
  component: ServiceCardList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    cards: {
      control: {
        type: "object",
      },
    },
  },
};

export default meta;

const Template: StoryFn<IServiceCardListProps> = () => ServiceCardList();

export const Default = Template.bind({});
