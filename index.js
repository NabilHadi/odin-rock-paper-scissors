let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  const rpsArray = ["rock", "paper", "scissors"];
  const randNum = Math.floor(Math.random() * 3);
  return rpsArray[randNum];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection === "rock") {
    if (computerSelection === "rock") {
      return "It is a draw!";
    } else if (computerSelection === "paper") {
      computerScore++;
      return "You Lose! Paper beats Rock";
    } else if (computerSelection === "scissors") {
      playerScore++;
      return "You Win! Rock beats Scissors";
    } else {
      return "error: Wrong computer Input";
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      playerScore++;
      return "You Win! Paper beats Rock";
    } else if (computerSelection === "paper") {
      return "It is a draw!";
    } else if (computerSelection === "scissors") {
      computerScore++;
      return "You Lose! Scissors beats Paper";
    } else {
      return "error: Wrong computer Input";
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      computerScore++;
      return "You Lose! Rock beats Scissors";
    } else if (computerSelection === "paper") {
      playerScore++;
      return "You Win! Scissors beats Paper";
    } else if (computerSelection === "scissors") {
      return "It is a draw!";
    } else {
      return "error: Wrong computer Input";
    }
  } else {
    return "error: Wrong player Input";
  }
}

const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorsBtn = document.querySelector("#scissorsBtn");
const resetBtn = document.querySelector("#resetBtn");
const resultDiv = document.querySelector("#result");
const scoreDiv = document.querySelector("#score");

function clickHandler(event) {
  resultDiv.textContent = playRound(event.target.textContent.toLowerCase(), computerPlay());
  scoreDiv.textContent = `Player: ${playerScore} -- Computer: ${computerScore}`;
  if (playerScore === 5 || computerScore === 5) {
    rockBtn.removeEventListener("click", clickHandler);
    paperBtn.removeEventListener("click", clickHandler);
    scissorsBtn.removeEventListener("click", clickHandler);
    resultDiv.textContent = `${playerScore === 5 ? "You" : "Computer"} Won!!`;
  }
}

rockBtn.addEventListener("click", clickHandler);
paperBtn.addEventListener("click", clickHandler);
scissorsBtn.addEventListener("click", clickHandler);

resetBtn.addEventListener("click", () => {
  resultDiv.textContent = "Click on a button to start the game";
  scoreDiv.textContent = "Whoever gets 5 points first wins the game!";
  playerScore = 0;
  computerScore = 0;

  rockBtn.addEventListener("click", clickHandler);
  paperBtn.addEventListener("click", clickHandler);
  scissorsBtn.addEventListener("click", clickHandler);
});

resultDiv.textContent = "Click on a button to start the game";
scoreDiv.textContent = "Whoever gets 5 points first wins the game!";



