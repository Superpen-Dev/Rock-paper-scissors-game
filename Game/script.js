let userScore = 0;
let computerScore = 0;
let round = 1;

const choices = ["rock", "paper", "scissors"];

function getComputerChoice(userChoice) {
    let computerChoice;
    do {
        computerChoice = choices[Math.floor(Math.random() * choices.length)];
    } while (computerChoice === userChoice); // Ensures the computer doesn't pick the same as the user
    return computerChoice;
}

function determineWinner(userChoice, computerChoice) {
    if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        userScore++;
        return "You win this round!";
    } else {
        computerScore++;
        return "Computer wins this round!";
    }
}

function updateScore() {
    document.getElementById("user-score").textContent = userScore;
    document.getElementById("computer-score").textContent = computerScore;
}

function playGame(userChoice) {
    if (round > 5) return;

    const computerChoice = getComputerChoice(userChoice);
    const result = determineWinner(userChoice, computerChoice);

    document.getElementById("results").innerHTML = `
        You chose: ${userChoice} <br>
        Computer chose: ${computerChoice} <br>
        ${result}
    `;

    updateScore();

    if (round === 5) {
        determineFinalWinner();
    } else {
        round++;
        document.getElementById("round-info").textContent = `Round: ${round}/5`;
    }
}

function determineFinalWinner() {
    const resultsDiv = document.getElementById("results");
    const resetButton = document.getElementById("reset-button");
    if (userScore > computerScore) {
        resultsDiv.innerHTML = "Congratulations! You are the winner! 🎉";
    } else {
        resultsDiv.innerHTML = "The computer wins! Better luck next time! 🤖";
    }
    resetButton.style.display = "block"; // Show the reset button
}

function resetGame() {
    userScore = 0;
    computerScore = 0;
    round = 1;

    document.getElementById("user-score").textContent = userScore;
    document.getElementById("computer-score").textContent = computerScore;
    document.getElementById("round-info").textContent = `Round: ${round}/5`;
    document.getElementById("results").innerHTML = "Game reset. Start playing!";
    document.getElementById("reset-button").style.display = "none"; // Hide the reset button
}
