// jshint esversion: 6

// Global variable for remembering which option the user has selected
let userOption;
let playerVsComputerSelected = false;
let playerVsPlayerSelected = false;
let computerVsComputerSelected = false;
// Some string variables
let playerWins = 'You Win!';
let computerWins = 'The Computer Wins :( Give it another try!';
let rock = 'Rock';
let paper = 'Paper';
let scissors = 'Scissors';

function playWith(option) {
    // first, we deselect the previous selected element (if exist)
    let userSelectionElement;
    if (userOption !== undefined) {
        userSelectionElement = document.getElementById(userOption);
        // we remove the purple border (if exist)
        userSelectionElement.style.border = "5px #F8F8F8  solid";
    }
    // then, we select the user option and we add a purple border
    userOption = option;
    userSelectionElement = document.getElementById(option);
    userSelectionElement.style.border = "5px #990066 solid";
}

function playGame() {
    let computerOption = Math.random();
    if (computerOption < 0.32) {
        computerOption = rock;
    } else if (computerOption <= 0.62) {
        computerOption = paper;
    } else {
        computerOption = scissors;
    }

    let resultMessage = compare(userOption, computerOption);

    document.getElementById("result").innerHTML =
        "<p>User select: " + userOption + " - Computer select:" + computerOption + "</p> <p>" + resultMessage + "</p>";

}

function choosePlayerVsComputer() {
    playerVsComputerSelected = true;
    computerVsComputerSelected = false;
    playerVsPlayerSelected = false;
}


function choosePlayerVsPlayer() {
    playerVsPlayerSelected = true;
    playerVsPlayerSelected = false;
    playerVsComputerSelected = false;
}

function chooseComputerVsComputer() {
    computerVsComputerSelected = true;
    playerVsPlayerSelected = false;
    playerVsComputerSelected = false;
}

function isOpponentSelected() {
    return computerVsComputerSelected || playerVsPlayerSelected || playerVsComputerSelected;
}

function compare(userSelection, computerSelection) {

    switch (userSelection) {
        case undefined:
            return "Please select an option before playing.";
            break;
        case computerSelection:
            return "It is a draw!";
            break
        case rock:
            if (computerSelection === scissors) {
                return playerWins;
            } else {
                return computerWins;
            }
            break;
        case paper:
            if (computerSelection === rock) {
                return playerWins;
            } else if (scissors) {
                return computerWins;
            }
            break;
        case scissors:
            if (computerSelection === rock) {
                return computerWins;
            } else {
                return playerWins;
            }
            break;
    }
}

module.exports = compare;