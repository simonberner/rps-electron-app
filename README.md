# Rock, Paper, Scissors Game
## Continuous Integration
| Build Status TravisCI  | Build Status CircleCI   | Code Coverage | Dependabot
|---|---|---|---|
|[![TravisCI](https://travis-ci.org/simonberner/rps-electron-app.svg?branch=master)](https://travis-ci.org/simonberner/rps-electron-app)|[![CircleCI](https://circleci.com/gh/simonberner/rps-electron-app.svg?style=svg)](https://circleci.com/gh/simonberner/rps-electron-app)|[![codecov](https://codecov.io/gh/simonberner/rps-electron-app/branch/master/graph/badge.svg)](https://codecov.io/gh/simonberner/rps-electron-app) |[![dependabot](https://badgen.net/dependabot/dependabot/dependabot-core/?icon=dependabot)](https://dependabot.com/)

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
    - ``npm install`` ([What does npm install do?](https://www.stackchief.com/tutorials/npm%20install%20%7C%20how%20it%20works))
    - ``npm start`` ([What does npm start do?](https://javascript.tutorialhorizon.com/2015/08/11/what-does-npm-start-do-in-nodejs/))

## Collaboration
- Open the project in VSCode/IntelliJ/WebStorm (or whatever you prefer) to explore the code
- Collaborate with me and create a PR with some awesome new features, UI improvements or bug-fixes.

### Ideas for new features and improvements
Find the current list of open [ideas here](https://github.com/simonberner/rps-electron-app/issues).

## Testing with Jest
To execute the Jest tests simply hit:``npm test`` or just ``jest``

## Dependencies
This project contains the following devDependencies:
- [Electron](https://electronjs.org/) itself
- [Jest](https://jestjs.io/) for Testing
- [Jest-extended](https://github.com/jest-community/jest-extended) for adding additional matchers to Jest's default ones (making it easy to test everything)
- [Jest-Chain](https://github.com/mattphillips/jest-chain) for adding expressive assertions and chaining matchers
- [JSHint](https://jshint.com/) as static code analysis tool for detecting errors and potential problems in the JavaScript code
- [Codecov](https://codecov.io) to generate code coverage reports