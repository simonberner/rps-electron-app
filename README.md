| Build Status TravisCI  | Build Status CircleCI   |
|---|---|
|[![TravisCI](https://travis-ci.org/simonberner/rps-electron-app.svg?branch=master)](https://travis-ci.org/simonberner/rps-electron-app)|[![CircleCI](https://circleci.com/gh/simonberner/rps-electron-app.svg?style=svg)](https://circleci.com/gh/simonberner/rps-electron-app) |
<br />

# Rock, Paper, Scissors Game
The famous Rock-Paper-Scissors Game now as electron app!

## How to run
- Clone or download this repo
- Open up a terminal in the project directory and hit:
    - ``npm install`` ([What does npm install do?](https://www.stackchief.com/tutorials/npm%20install%20%7C%20how%20it%20works))
    - ``npm start`` ([What does npm start do?](https://javascript.tutorialhorizon.com/2015/08/11/what-does-npm-start-do-in-nodejs/))

## Testing with Jest
To execute the Jest tests simply hit:``npm test``
 
## Game rules
You already know them by heart I guess.
But just in case, [here](https://en.wikipedia.org/wiki/Rock%E2%80%93paper%E2%80%93scissors) they are.

## Collaboration
- Open the project in VSCode/IntelliJ/WebStorm (or whatever you prefer) to explore the code
- Collaborate with me and create a PR with some awesome new features, UI improvements or bug-fixes ;)

## Ideas for new features and improvements
- Add a feature to change the opponent:
  - Player1 vs Computer (OK)
  - Player1 vs Player2 (Pending)
  - Computer1 vs Computer2 (Pending)
- Make the UI more awesome
- Customise the default electron menus
- Create a proper app icon for the game
- Create single distribution files for macOS, Win and Linux

## Dependencies
This project contains the following devDependencies:
- [Electron](https://electronjs.org/) itself
- [Jest](https://jestjs.io/) for Testing
- [Jest-extended](https://github.com/jest-community/jest-extended) for adding additional matchers to Jest's default ones (making it easy to test everything)
- [JSHint](https://jshint.com/) as static code analysis tool for detecting errors and potential problems in the JavaScript code