# Rock, Paper, Scissors Game
## Continuous Integration
| Build Status TravisCI  | Build Status CircleCI   | Code Coverage | Dependabot | Vulnerabilities
|---|---|---|---|---|
|[![TravisCI](https://travis-ci.org/simonberner/rps-electron-app.svg?branch=master)](https://travis-ci.org/simonberner/rps-electron-app)|[![CircleCI](https://circleci.com/gh/simonberner/rps-electron-app.svg?style=svg)](https://circleci.com/gh/simonberner/rps-electron-app)|[![codecov](https://codecov.io/gh/simonberner/rps-electron-app/branch/master/graph/badge.svg)](https://codecov.io/gh/simonberner/rps-electron-app)|[![dependabot](https://badgen.net/dependabot/dependabot/dependabot-core/?icon=dependabot)](https://dependabot.com/)|[![Known Vulnerabilities](https://snyk.io/test/github/simonberner/rps-electron-app/badge.svg)](https://snyk.io/test/github/simonberner/rps-electron-app)


## Chat
[![Gitter](https://badges.gitter.im/electronjsdevs/rps-electron-app.svg)](https://gitter.im/electronjsdevs/rps-electron-app?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

## About
The famous Rock-Paper-Scissors Game now as electron app!

## Game rules
You already know them by heart I guess.
But just in case, [here](https://en.wikipedia.org/wiki/Rock%E2%80%93paper%E2%80%93scissors) they are.

## How to run
- Clone or download this repo
- Open up a terminal in the project directory and hit:
    - ``yarn install`` ([What does yarn install do?](https://classic.yarnpkg.com/en/docs/cli/install/))
    - ``yarn start`` (runs the start script from the package.json)

## How upgrade a package
- Use ``yarn upgrade <package>`` to upgrade a specific dependency
- Use ``yarn upgrade`` to upgrade all existing dependencies

## Collaboration
- Open the project in VSCode/IntelliJ/WebStorm (or whatever you prefer) to explore the code
- Collaborate with me and create a PR with some awesome new features, UI improvements or bug-fixes.

### Ideas for new features and improvements
Find the current list of open [ideas here](https://github.com/simonberner/rps-electron-app/issues).

## Testing with Jest
To execute the Jest tests simply hit:``yarn test`` or just ``jest``

## Dependencies
This project contains the following devDependencies:
- [Electron](https://electronjs.org/) itself
- [electron-builder](https://github.com/electron-userland/electron-builder) to package and build a ready distribution Electron app
- [Jest](https://jestjs.io/) for Testing
- [Jest-extended](https://github.com/jest-community/jest-extended) for adding additional matchers to Jest's default ones (making it easy to test everything)
- [Jest-Chain](https://github.com/mattphillips/jest-chain) for adding expressive assertions and chaining matchers
- [JSHint](https://jshint.com/) as static code analysis tool for detecting errors and potential problems in the JavaScript code
- [Codecov](https://codecov.io) to generate code coverage reports

## A few words about Yarn
- [A new package manager for JavaScript](https://engineering.fb.com/web/yarn-a-new-package-manager-for-javascript/)
- [NPM Vs Yarn](https://medium.com/@vincentnewkirk/npm-vs-yarn-2019-e88757b17038)
- [Yarn vs npm - Best Package Manager 2020](https://www.positronx.io/yarn-vs-npm-best-package-manager/)
- [Why and how to migrate from npm to yarn](https://waverleysoftware.com/blog/yarn-vs-npm/)