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
      return "draw: It is a draw!";
    } else if (computerSelection === "paper") {
      return "lose: You Lose! Paper beats Rock";
    } else if (computerSelection === "scissors") {
      return "win: You Win! Rock beats Scissors";
    } else {
      return "error: Wrong computer Input";
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      return "win:You Win! Paper beats Rock";
    } else if (computerSelection === "paper") {
      return "draw:It is a draw!";
    } else if (computerSelection === "scissors") {
      return "lose:You Lose! Scissors beats Paper";
    } else {
      return "error:Wrong computer Input";
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      return "lose:You Lose! Rock beats Scissors";
    } else if (computerSelection === "paper") {
      return "win:You Win! Scissors beats Paper";
    } else if (computerSelection === "scissors") {
      return "draw:It is a draw!";
    } else {
      return "error:Wrong computer Input";
    }
  } else {
    return "error: Wrong player Input";
  }
}

function game() {
  let totalGames = 5;
  let score = 0;
  for (let i = 0; i < totalGames; i++) {
    const playerSelection = prompt("rock, paper, scissors. \nEnter your choice: ");
    const result = playRound(playerSelection, computerPlay());
    if (result.startsWith("win:")) {
      score++;
      console.log(result.substring("win:".length));
    } else if (result.startsWith("lose:")) {
      console.log(result.substring("lose:".length));
    } else if (result.startsWith("draw:")) {
      console.log(result.substring("draw:".length));
    } else {
      console.log(result);
    }
  }

  console.log(`You won ${score} ${score > 1 ? "games" : "game"} ` +
    `out of ${totalGames} ${totalGames > 1 ? "games" : "game"}`);
}


