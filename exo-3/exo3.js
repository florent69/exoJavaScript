// you can write js here
console.log('exo-3');

function getUserChoice() {
    var userInput = prompt('rock, paper, scissors ?');
    switch (userInput) {
        case 'rock' :
            console.log('User choice : ' + userInput);
            break;
        case 'paper' :
            console.log('User choice : ' + userInput);
            break;
        case 'scissors' :
            console.log('User choice : ' + userInput);
            break;
        case 'bomb' :
            console.log('User choice : ' + userInput);
            break;
        default :
            console.log('You have to make a choice between rock, paper or scissors : Retry !!!')
    }
    return userInput.toLowerCase();
}

function getComputerChoice() {
    const resultComputer = Math.floor(Math.random(0, 2));
    switch (resultComputer) {
        case 0 :
            return 'rock';
            break;
        case 1 :
            return 'paper';
            break;
        case 2 :
            return 'scissors';
            break;
    }
}

function determineWinner(userChoice, computerChoice) {
    // userChoice = getUserChoice();
    // computerChoice = getComputerChoice();
    // console.log('Computer choice : ' + computerChoice);
    if (userChoice === computerChoice) {
        console.log("Tied");
    } else if (userChoice === "rock") {
        if (computerChoice === "scissors") {
            console.log('you are the winner !!!');
        } else {
            console.log('Computer wins... Retry !!!');
        }
    } else if (userChoice === "paper") {
        if (computerChoice === "rock") {
            console.log('you are the winner !!!');
        } else {
            console.log('Computer wins... Retry !!!');
        }
    } else if (userChoice === "scissors") {
        if (computerChoice === "paper") {
            console.log('you are the winner !!!');
        } else {
            console.log('Computer wins... Retry !!!');
        }
    } else if (userChoice === "bomb") {
        console.log('you are the winner !!!');
    }
}

function playGame() {
    const uChoice = getUserChoice();
    const computerChoice = getComputerChoice();
    console.log('Computer choice : ' + computerChoice)
    console.log("Your choice is " + uChoice + " and the computer is " + computerChoice)
    determineWinner(uChoice, computerChoice);
}

//
playGame();