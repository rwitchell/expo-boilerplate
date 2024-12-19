# Expo boilerplate

This repo comes with expo and tests already set up for building
with expo and not encountering any package issues.

## Dependencies

### Maestro

Maestro will handle your e2e test, and more importantly check whether your is still booting up and working. Follow these instructions to set up on your machine: [Maestro Installation Instructions](https://maestro.mobile.dev/getting-started/installing-maestro)

- maestro tests will output to .maestro/tests/

## Features

### Yarn

The repo is set up in Yarn v4, but feel free to migrate to NPM, bun, etc.

### Husky

Husky currently runs pre-commit hooks.

- "npx lint-staged" (which in turn runs eslint and prettier, see package.json) and runs the unit test suite.

If you are doing rapid dev and the pre-commit hook is slowing you down: you can suspend it by commening out the lines in the .husky/pre-commit file.

### Prettier

to keep the code clean

###

### Github

github action will install yarn, and run the unit tests for you.
