//Rock Paper Scissors
const options = ["Rock", "Paper","Scissors"]; // Define the game options
let computerSelection = getComputerChoice().toUpperCase(); // Assign the computer selection from function
let theOne;
let draw = 0;
let pcWin = 0;
let playerWin = 0;

// Function to generate a random option for computer
function getComputerChoice() {

    let number = Math.floor(Math.random() * 3);
    let computerOption = options[number];
    return computerOption;
    
};

// Function to play a round and determine winner
function playRound(playerChoice, computerChoice){

    if (playerChoice == computerChoice){
        draw++;
        console.log('It\'s a draw');
    } else if (playerChoice == 'ROCK' && computerChoice == 'SCISSORS' || playerChoice == 'SCISSORS' && computerChoice == 'PAPER' || playerChoice == 'PAPER' && computerChoice == 'ROCK'){
        playerWin++;
        console.log('Player won this round');
    } else if (playerChoice == 'ROCK' && computerChoice == 'PAPER' || playerChoice == 'PAPER' && computerChoice == 'SCISSORS' || playerChoice == 'SCISSORS' && computerChoice == 'ROCK' ) {
        pcWin++;
        console.log('Computer has won this round');
    } else {
        console.log('You must\'ve made a typo.')
    };
    
 };

 // Looping the game 5 times
function game() {

    for (let i = 1; i <=5; i++) {
    theOne = prompt('Pick Rock, Paper, or Scissors!').toUpperCase(); // Assign user selection from prompt
    playRound(theOne, computerSelection);
    };

};

// Deciding the winner
function runGame (){

    game();
    if (playerWin > pcWin){
        console.log('Player has won')
    } else {
        console.log('PC has won')
    };

};

runGame();
