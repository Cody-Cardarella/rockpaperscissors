const options = ["Rock", "Paper","Scissors"] // Define the options
let computerSelection = getComputerChoice().toUpperCase(); // Set Computer Selection to the return of the function
let theOne = prompt('Pick Rock, Paper, or Scissors!').toUpperCase(); // Assign variable to user selection

// Function to generate a random option
function getComputerChoice() {
    let number = Math.floor(Math.random() * 3);
    let computerOption = options[number];
    return computerOption;
}


// Function to play a round and compare player selection to computer selection
function playRound(playerChoice, computerChoice){
    if (theOne == computerChoice){
        console.log('It\'s a draw!')
    };
    if (theOne == 'ROCK ' && computerChoice == 'SCISSORS' || theOne == 'SCISSORS' && computerChoice == 'PAPER' || theOne == 'PAPER' && computerChoice == 'ROCK'){
        console.log('You won!')
    } else if (theOne == 'ROCK' && computerChoice == 'PAPER' || theOne == 'PAPER' && computerChoice == 'SCISSORS' || theOne == 'SCISSORS' && computerChoice == 'ROCK' ) {
        console.log('Computer won!')
    };
 };

 console.log('You: ' + theOne);
 console.log('Computer: ' + computerSelection);
 playRound(theOne, computerSelection);