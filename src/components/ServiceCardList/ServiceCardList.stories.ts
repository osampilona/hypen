import type { Meta, StoryFn } from "@storybook/react";
import ServiceCardList from "@/components/ServiceCardList/ServiceCardList";
import type { ServiceCardType } from "@/types/services/card";

const meta: Meta<typeof ServiceCardList> = {
  title: "Atomic Components/Service Card List",
  component: ServiceCardList,
  parameters: {
    layout: "centered",
    tags: ["autodocs"],
  },
};

export default meta;
const Template: StoryFn<ServiceCardType> = () => ServiceCardList();

export const Default = Template.bind({});
