function getComputerChoice() {
    let randomInteger = Math.floor(Math.random() * 3);

    if (randomInteger === 0) {
        return "rock"
    } 
    else if (randomInteger === 1) {
        return "paper"
    } 
    else {
        return "scissors"
    };
}

function getPlayerSelection() {
    let playerInput = prompt("Rock, paper, or scissors?", "Rock")
    return playerInput.toLowerCase()
}

function playRound() {
    let playerSelection = getPlayerSelection();
    let computerSelection = getComputerChoice();

    if (playerSelection === computerSelection) {
        return `You tie! Computer chose ${computerSelection}.`
    }
    else if ((playerSelection === 'rock' && computerSelection === 'scissors')
        || (playerSelection === 'paper' && computerSelection === 'rock')
        || (playerSelection === 'scissors' && computerSelection === 'paper')) {
            return `You win! Computer chose ${computerSelection}.`
        }
    else if ((computerSelection === 'rock' && playerSelection === 'scissors')
        || (computerSelection === 'paper' && playerSelection === 'rock')
        || (computerSelection === 'scissors' && playerSelection === 'paper')) {
            return `You lose! Computer chose ${computerSelection}.`
        }
    else {
        return `Sorry "${playerSelection}" is not a valid choice. Please try again.`
    }
}
