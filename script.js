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
