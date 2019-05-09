# nextjs-typescript-boilerplate

Minimal boilerplate for running a Next.js app in Typescript

## Features

- ESLint
- TypeScript
- Bundle analyzer
- ESLint-Prettier integration with VS Code

## ESLint Configuration

Using new @typescript-eslint/eslint-plugin and @typescript-eslint/parser.

Plugins include:

- react
- jsx-a11y
- import
- typescript-eslint

Default exports are discouraged with this boilerplate. ESLint and Prettier are configured to throw errors if using default exports and not named exports. Named exports are preferred since it makes refractoring code easier.

ESLint is configured to use airbnb eslint config.
