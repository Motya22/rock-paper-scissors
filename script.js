function getComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const random = Math.floor(Math.random() * choices.length);

  return choices[random];
}

function playRound(playerSelection, computerSelection) {
  const playerSelectionInLowerCase = playerSelection.toLowerCase();

  if (playerSelectionInLowerCase === computerSelection.toLowerCase()) {
    return 'Draw!';
  }

  const rules = {
    rock: 'Scissors',
    paper: 'Rock',
    scissors: 'Paper',
  };
  const playerSelectionInCapitalizeCase =
    playerSelectionInLowerCase.charAt(0).toUpperCase() +
    playerSelectionInLowerCase.slice(1);

  if (computerSelection === rules[playerSelectionInLowerCase]) {
    return `You Win! ${playerSelectionInCapitalizeCase} beats ${computerSelection}`;
  } else {
    return `You Lose! ${computerSelection} beats ${playerSelectionInCapitalizeCase}`;
  }
}

function getGameResult(playerScore, computerScore) {
  if (playerScore === computerScore) {
    return 'The draw won!';
  } else if (playerScore > computerScore) {
    return 'The winner is the player!';
  } else {
    return 'The winner is the computer!';
  }
}

function game() {
  let computerScore = 0;
  let playerScore = 0;

  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt(
      'Choose a "rock", "scissors" or "paper"',
      'rock'
    );
    const computerSelection = getComputerChoice();
    const roundResult = playRound(playerSelection, computerSelection);

    console.log(roundResult);

    if (roundResult.startsWith('You Win!')) {
      playerScore++;
    } else if (roundResult.startsWith('You Lose!')) {
      computerScore++;
    }

    console.log(playerScore, computerScore);
  }

  console.log(getGameResult(playerScore, computerScore));
}

game();
