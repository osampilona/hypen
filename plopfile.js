const { camelCase, pascalCase } = require("change-case");

module.exports = function (plop) {
  // Registering camelCase and pascalCase helpers
  plop.setHelper("camelCase", (text) => camelCase(text));
  plop.setHelper("pascalCase", (text) => pascalCase(text));

  plop.setGenerator("component", {
    description: "Create a new component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Component name (PascalCase):",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: "plop-templates/component.tsx.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/{{camelCase name}}.module.scss",
        templateFile: "plop-templates/component.module.scss.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/{{camelCase name}}.test.tsx",
        templateFile: "plop-templates/component.test.tsx.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/{{camelCase name}}.stories.ts",
        templateFile: "plop-templates/component.stories.ts.hbs",
      },
    ],
  });
};
