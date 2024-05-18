import type { Preview } from "@storybook/react";
import "../src/app/globals.scss";

const preview: Preview = {
  parameters: {
    actions: { play: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
