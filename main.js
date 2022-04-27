//computer selection
let computerOptions = ["rock", "paper", "scissors"];

function computerPlay() {
  return computerOptions[Math.floor(Math.random() * computerOptions.length)];
}

//console.log(computerPlay());

//Play a round of the game

function playRound() {
  let pScore = 0;
  let cScore = 0;
  playerSelection = prompt("What do you choose to play?");
  computerSelection = computerPlay();

  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    return "It's a tie";
  } else if (playerSelection == "rock") {
    if (computerSelection == "paper") {
      return "player won";
    } else {
      return "computer won";
    }
  } else if (playerSelection == "scissors") {
    if (computerSelection == "rock") {
      return "player won";
    } else {
      return "computer won";
    }
  } else if (playerSelection == "paper") {
    if (computerSelection == "scissors") {
      return "player won";
    } else {
      return "computer won";
    }
  }
}

//Play five rounds and calculate the score

function game() {
  pScore = 0;
  cScore = 0;
  for (let i = 0; i < 5; i++) {
    gamePlay = playRound();
    if (gamePlay == "player won") {
      pScore++;
    } else if (gamePlay == "computer won") {
      cScore++;
    }
    console.log(i, gamePlay, pScore, cScore);
  }
  console.log(pScore, cScore);
  if (pScore > cScore) {
    console.log("THE PLAYER HAS WON");
  } else if (cScore > pScore) {
    console.log("THE COMPUTER HAS WON");
  } else if (cScore == pScore) {
    console.log("IT'S A TIE");
  }
}

game();
