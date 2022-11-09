//Rock Paper Scissors
const options = ["Rock", "Paper","Scissors"];
let btnClick = document.querySelectorAll('button')
let results = document.querySelector('.winner')
let playercounter = document.querySelector('.pcounter')
let computercounter = document.querySelector('.ccounter')
let announce = document.querySelector('.announce')
let pCounter = 0;
let cCounter = 0;

// Function to generate a random option for computer
function getComputerChoice() {
    let number = Math.floor(Math.random() * 3);
    let computerOption = options[number];
    return computerOption.toUpperCase();
};

// Grab player choice
function playerChoiceFn() {
    btnClick.forEach((button) => {
        button.addEventListener('click', () => {
            let theChoice = button.className.toUpperCase();
            playRound(theChoice, getComputerChoice());
                });
            });
    }

// FPlay round and log the winner
function playRound(pChoice, cChoice){

    computercounter.textContent = cCounter;
    playercounter.textContent = pCounter;

    if (pChoice == cChoice){
        results.textContent = 'It\'s a draw';

    } else if (pChoice == 'ROCK' && cChoice == 'SCISSORS' || 
              pChoice == 'SCISSORS' && cChoice == 'PAPER' || 
              pChoice == 'PAPER' && cChoice == 'ROCK'){
              results.textContent = 'Player won this round';
              
              pCounter++;
              

    } else if (pChoice == 'ROCK' && cChoice == 'PAPER' || 
              pChoice == 'PAPER' && cChoice == 'SCISSORS' || 
              pChoice == 'SCISSORS' && cChoice == 'ROCK' ) {
              results.textContent = 'Computer has won this round';
              
              cCounter++;

    } else {

        results.textContent = ('You must\'ve made a typo.')

    };
    if (pCounter == 6){
        announce.textContent = "Player Won";
    } if (cCounter == 6){
        announce.textContent = "Computer Won";
    };
};



playerChoiceFn();


