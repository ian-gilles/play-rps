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