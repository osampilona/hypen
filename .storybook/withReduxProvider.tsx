import React from "react";
import { Provider } from "react-redux";
import { store } from "../src/lib/store";

const withReduxProvider = (Story, context) => {
  return (
    <Provider store={store}>
      <Story {...context} />
    </Provider>
  );
};

export default withReduxProvider;
