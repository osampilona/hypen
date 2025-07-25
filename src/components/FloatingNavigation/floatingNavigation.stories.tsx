import { Meta, StoryObj } from '@storybook/react';
import FloatingNavigation from '@/components/FloatingNavigation/FloatingNavigation';

const meta: Meta<typeof FloatingNavigation> = {
  title: 'Navigation/FloatingNavigation',
  component: FloatingNavigation,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: 'A floating navigation bar that appears at the bottom of the screen on mobile devices. Contains quick access to main navigation items from the BigScreenNavigation.',
      },
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ height: '100vh', position: 'relative' }}>
        <div style={{ padding: '2rem', paddingBottom: '6rem' }}>
          <h1>Content above floating navigation</h1>
          <p>This floating navigation should appear at the bottom of the screen.</p>
        </div>
        <Story />
      </div>
    ),
  ],
}

export default meta;

type Story = StoryObj<typeof FloatingNavigation>;

export const Default: Story = {};

export const WithLightTheme: Story = {
  parameters: {
    docs: {
      description: {
        story: 'FloatingNavigation in light theme mode',
      },
    },
  },
};

export const WithDarkTheme: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
    docs: {
      description: {
        story: 'FloatingNavigation in dark theme mode',
      },
    },
  },
};
