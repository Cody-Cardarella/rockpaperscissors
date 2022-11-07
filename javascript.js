const options = ["Rock", "Paper","Scissors"]

function getComputerChoice() {
    let number = Math.floor(Math.random() * 3)
    console.log(options[number]);
}

getComputerChoice();