# Expo boilerplate

This repo comes with expo and tests already set up for building
with expo. It's main purpose is to be able to upgrade packages during development, and minimise the number of fatal errors encountered when developing, due to configuration issues of babel / metro / jest / and all packages. With a strong unit test, and e2e tests: you can make sure each code change is not affecting your build.

## TODO

 - [ ] add e2e test for web build
 - [ ] include additional components
 - [ ] include additional tests (currently skipped. If you know how to make these work, please open an issue / pull request)

## Dependencies

### Locked versions

Most packages are version locked to stop unwanted updates causing development issues. Even bug fixes by a dependency can cause hours of lost time figuring out why your build worked yesterday and not today. Leave the dependency updates to dependabot who can then run tests to make sure your build is still passing.

### Maestro

Maestro will handle your e2e test, and more importantly check whether your app is still booting up and working. 
This is not handled by yarn / npm, and you will need to install yourself. (homebrew best if that's your thing). Follow these instructions to set up on your machine: [Maestro Installation Instructions](https://maestro.mobile.dev/getting-started/installing-maestro)

- maestro tests will output to .maestro/tests/

## Features

### Yarn

The repo is set up in Yarn v4, but feel free to migrate to NPM, bun, etc.

### Husky

Husky currently runs pre-commit hooks.

- "npx lint-staged" (which in turn runs eslint and prettier, see package.json) and runs the unit test suite.

If you are doing rapid dev and the pre-commit hook is slowing you down: you can suspend it by commening out the lines in the .husky/pre-commit file.

### Prettier

to keep the code clean.

(Make sure you set up your IDE to handle eslint & prettier on save - it'll improve your experience.)

### Github

github action will install yarn, and run the unit tests for you.
