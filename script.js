function getComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const random = Math.floor(Math.random() * choices.length);

  return choices[random];
}

function playRound() {
  const playerSelection = this.dataset.playerSelection;
  const computerSelection = getComputerChoice();

  if (playerSelection === computerSelection) {
    results.textContent = 'Draw';

    return;
  }

  const rules = {
    rock: 'Scissors',
    paper: 'Rock',
    scissors: 'Paper',
  };

  if (computerSelection === rules[playerSelection.toLowerCase()]) {
    results.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;

    playerScore++;
  } else {
    results.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;

    computerScore++;
  }

  updateScore();

  if (playerScore === 5 || computerScore === 5) {
    setTimeout(function () {
      showGameResult();

      playerScore = 0;
      computerScore = 0;
    }, 1000);
  }
}

function updateScore() {
  const playerScoreEl = document.querySelector('#player-score');
  const computerScoreEl = document.querySelector('#computer-score');

  if (playerScore === 5 || computerScore === 5) {
    playerScoreEl.textContent = playerScore;
    computerScoreEl.textContent = computerScore;

    setTimeout(function () {
      playerScoreEl.textContent = 0;
      computerScoreEl.textContent = 0;
    }, 1000);
  } else {
    playerScoreEl.textContent = playerScore;
    computerScoreEl.textContent = computerScore;
  }
}

function showGameResult() {
  if (playerScore === computerScore) {
    results.innerHTML = `${playerScore} : ${computerScore} <br> The draw won!`;
  } else if (playerScore > computerScore) {
    results.innerHTML = `${playerScore} : ${computerScore} <br> The winner is the player!`;
  } else {
    results.innerHTML = `${playerScore} : ${computerScore} <br> The winner is the computer!`;
  }
}

const btns = document.querySelectorAll('button');
const results = document.querySelector('#results');
let computerScore = 0;
let playerScore = 0;

btns.forEach((btn) => btn.addEventListener('click', playRound));
