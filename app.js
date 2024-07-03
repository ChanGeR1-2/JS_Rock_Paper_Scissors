
let humanScore = 0;
let computerScore = 0;

const buttons = document.querySelector(".buttons");

buttons.addEventListener("click", (event) => {
    if (!isOver()) playRound(event.target.id, getComputerChoice());
    else document.querySelector("#round-result").textContent = "Game is Already Over!";
})

const resultsDiv = document.querySelectorAll(".results span");

function playRound(humanChoice, computerChoice) {
    let winner;
    if (humanChoice === "rock" && computerChoice === "scissors"
        || humanChoice === "scissors" && computerChoice === "paper"
        || humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        winner = "player";
    } else if (computerChoice === "rock" && humanChoice === "scissors"
        || computerChoice === "scissors" && humanChoice === "paper"
        || computerChoice === "paper" && humanChoice === "rock") {
        computerScore++;
        winner = "computer";
    }

    resultsDiv.forEach((span) => {
        switch(span.id) {
            case "round-result":
                span.textContent = calculateRoundWinner(humanChoice, computerChoice, winner);
                break;
            case "player-score":
                span.firstElementChild.textContent = humanScore.toString();
                break;
            case "computer-score":
                span.firstElementChild.textContent = computerScore.toString();
                break;
            case "final-score":
                span.textContent = calculateWinner();
                break;
        }
    })
}

function isOver() {
    return humanScore >= 5 || computerScore >= 5;
}

function calculateRoundWinner(humanChoice, computerChoice, winner) {
    if (winner === "player") {
        return `You win! ${capitaliseFirstLetter(humanChoice)} beats ${computerChoice}!`;
    } else if (winner === "computer") {
        return `You lose! ${capitaliseFirstLetter(computerChoice)} beats ${humanChoice}!`;
    } else {
        return "Draw!";
    }
}

function capitaliseFirstLetter(str) {
    const firstLetter = str.charAt(0);
    const remainingLetters = str.slice(1);
    return firstLetter.toUpperCase() + remainingLetters;
}

function calculateWinner() {
    if (isOver()) {
        if (humanScore > computerScore) {
            return `You win! The score is ${humanScore}:${computerScore}`;
        } else {
            return `You lose! The score is ${humanScore}:${computerScore}`;
        }
    } else {
        return '';
    }
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
