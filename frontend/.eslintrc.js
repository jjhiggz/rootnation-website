/* eslint-disable-next-line */
module.exports = {
  extends: ["react-app", "airbnb-typescript", "plugin:prettier/recommended"],
  rules: {
    "react/prop-types": "off",
    "react/jsx-indent": [2, 2, { checkAttributes: false }],
    "react/jsx-indent-props": [2, 2],
    "import/prefer-default-export": "off",
    "import/no-cycle": "off",
    "no-multi-assign": "off",
    "import/no-extraneous-dependencies": "off",
    "no-multiple-empty-lines": [
      "error",
      {
        max: 1,
      },
    ],
    "padded-blocks": ["error", "never"],
    curly: ["error", "all"],
    "import/extensions": "off",
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      },
    },
  },
  plugins: ["import", "jest-dom"],
  globals: {
    cy: true,
    context: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    project: ["tsconfig.json"],
    tsconfigRootDir: __dirname,
    sourceType: "module",
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"], // Your TypeScript files extension
      parserOptions: {
        project: ["./tsconfig.json"], // Specify it only for TypeScript files
      },
    },
  ],
  parser: "typescript-eslint/parser",
  ignorePatterns: [
    "next.config.js",
    "jest.config.js",
    "next-i18next.config.js",
    "**/test/jest.setup.ts",
    "**/test/mocks.ts",
  ],
};
