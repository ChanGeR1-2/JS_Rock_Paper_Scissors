
playGame();

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    function playRound(humanChoice, computerChoice) {
        if (humanChoice === "rock" && computerChoice === "scissors"
            || humanChoice === "scissors" && computerChoice === "paper"
            || humanChoice === "paper" && computerChoice === "rock") {
            humanScore++;
            console.log(`You win! ${capitaliseFirstLetter(humanChoice)} beats ${computerChoice}`);
        } else if (computerChoice === "rock" && humanChoice === "scissors"
            || computerChoice === "scissors" && humanChoice === "paper"
            || computerChoice === "paper" && humanChoice === "rock") {
            computerScore++;
            console.log(`You lose! ${capitaliseFirstLetter(computerChoice)} beats ${humanChoice}`);
        } else {
            console.log("Draw!")
        }
    }

    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    console.log(`Score: ${humanScore} : ${computerScore}`);

    if (humanScore > computerScore) {
        console.log("You win!")
    } else if (computerScore > humanScore) {
        console.log('You lose!')
    } else {
        console.log("Draw!");
    }
}

function capitaliseFirstLetter(str) {
    const firstLetter = str.charAt(0);
    const remainingLetters = str.slice(1);
    return firstLetter.toUpperCase() + remainingLetters;
}

function getComputerChoice() {
    const rand = getRandomInt(3);
    switch (rand) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getHumanChoice() {
    let input;
    while (true) {
        input = prompt("Enter rock, paper or scissors").toLowerCase();
        const regex = new RegExp("rock|paper|scissors")
        if (regex.test(input)) {
            break;
        }
    }
    return input;
}
