# nextjs-typescript-boilerplate

Minimal boilerplate for running a Next.js app in Typescript

To use just clone the repo like so...

```
git clone --depth=1 https://github.com/shadez95/nextjs-typescript-boilerplate.git name-of-app
```

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

## Bundle Analyzer

The bundle analyzer uses @next/bundle-analyzer and outputs to static HTML files, one for server and the other for client.

You can use webpack-bundle-analyzer, if you want to take more control of the bundle analyzer. Refer to the next.config.js file for more information on how to do that, which also contains example code of using webpack-bundle-analyzer.
