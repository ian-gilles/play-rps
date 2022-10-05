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
        return 0
    }
    else if ((playerSelection === 'rock' && computerSelection === 'scissors')
        || (playerSelection === 'paper' && computerSelection === 'rock')
        || (playerSelection === 'scissors' && computerSelection === 'paper')) {
            return 1
        }
    else if ((computerSelection === 'rock' && playerSelection === 'scissors')
        || (computerSelection === 'paper' && playerSelection === 'rock')
        || (computerSelection === 'scissors' && playerSelection === 'paper')) {
            return -1
        }
    else {
        return null
    }
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    let roundCount = 1;

    console.log('Let\'s play rock-paper-scissors! We\'ll play 5 rounds.')

    for (let i = 0; i < 5; i++) {
        let result = playRound();

        
        console.log(`Round ${roundCount}`)

        switch (result) {
            case 0:
                console.log(`You tied this round. Score is still ${playerScore} - ${computerScore}.`);
                break;
            case 1:
                console.log(`You won this round!`);
                playerScore++;
                break;
            case -1:
                console.log(`You lost this round!`);
                computerScore++;
                break;
            case null:
                i--;
                console.log('Sorry, that is not a valid input. Try again.')
                roundCount--;
                break;
        }
        let score = `player: ${playerScore} computer: ${computerScore}`;
        console.log(`SCORE`);
        console.log(score);
        roundCount++;

        if (i === 4) {
            console.log(`Final score is ${score}.`)

            if (playerScore < computerScore) {
                console.log('You lose.')
            }
            else if (playerScore > computerScore) {
                console.log('You win! Nice job.')
            }
            else if (playerScore === computerScore) {
                console.log('It\'s a tie!')
            }
        }
    }
    console.log(`Game Over!`)
}