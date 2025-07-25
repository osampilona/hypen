import { Meta, StoryObj } from "@storybook/react";
import FloatingNavigation from "@/components/FloatingNavigation/FloatingNavigation";

const meta: Meta<typeof FloatingNavigation> = {
  title: "Navigation/FloatingNavigation",
  component: FloatingNavigation,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "A floating navigation bar that appears at the bottom of the screen. On desktop, it displays as a centered navigation bar. On mobile, it shows as a FAB (Floating Action Button) in the bottom right corner that expands to show navigation items when tapped.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof FloatingNavigation>;

export const Default: Story = {};

export const WithLightTheme: Story = {
  parameters: {
    docs: {
      description: {
        story: "FloatingNavigation in light theme mode",
      },
    },
  },
};

export const WithDarkTheme: Story = {
  parameters: {
    backgrounds: { default: "dark" },
    docs: {
      description: {
        story: "FloatingNavigation in dark theme mode",
      },
    },
  },
};

export const MobileView: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
    docs: {
      description: {
        story:
          "FloatingNavigation on mobile devices shows as a FAB (Floating Action Button) in the bottom right corner. Tap the menu icon to expand and show navigation items.",
      },
    },
  },
};
