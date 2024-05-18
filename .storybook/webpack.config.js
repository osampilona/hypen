const path = require("path");

module.exports = ({ config }) => {
  config.resolve.alias = {
    ...config.resolve.alias,
    "@": path.resolve(__dirname, "../src"),
    "@styles": path.resolve(__dirname, "../src/styles"),
  };

  // Ensure the rules are safely accessed
  const rules = config.module.rules.find((rule) => rule.oneOf) || { oneOf: [] };

  rules.oneOf.forEach((rule) => {
    // We only want to modify SCSS loaders
    if (rule.test && rule.test.toString().includes("scss")) {
      const sassLoader =
        rule.use &&
        rule.use.find(
          (use) => use.loader && use.loader.includes("sass-loader"),
        );
      if (sassLoader) {
        sassLoader.options = sassLoader.options || {};
        sassLoader.options.additionalData = `@import '@styles/variables.scss';`;
      }
    }
  });

  return config;
};
