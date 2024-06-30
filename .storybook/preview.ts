import type { Preview } from "@storybook/react";
import withReduxProvider from "./withReduxProvider";
import "../src/styles/globals.scss";
import "../src/styles/variables.globals.scss";

export const decorators = [withReduxProvider];

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
  tags: ["autodocs"],
};

export default preview;
