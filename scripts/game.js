const gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

const gameArea = document.querySelector('#game-area');
const activePlayerName = document.querySelector('#active-player-name');
const gameOver = document.querySelector('#game-over');

let activePlayer = 0;
let currentRound = 1;
let isGameOver = false;

function resetGameStatus() {
  activePlayer = 0;
  currentRound = 1;
  isGameOver = false;
  gameOver.classList.add('hidden');
  gameOver.firstElementChild.innerHTML =
    'You Won! <span id="winner-name">PLAYER NAME</span>!';

  let gameBoardIndex = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      gameData[i][j] = 0;
      const gameBoardItem = gameBoard.children[gameBoardIndex];
      gameBoardItem.textContent = '';
      gameBoardItem.classList.remove('disabled');
      gameBoardIndex++;
    }
  }
}

function startNewGame() {
  if (players[0].name === '' || players[1].name === '') {
    alert('Please enter a proper name for both players!');
    return;
  }

  resetGameStatus();
  activePlayerName.textContent = players[activePlayer].name;
  gameArea.classList.remove('hidden');
}

function switchPlayer() {
  if (!activePlayer) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  activePlayerName.textContent = players[activePlayer].name;
}

function selectGameField(event) {
  const selectedField = event.target;
  const selectedCol = selectedField.dataset.col - 1;
  const selectedRow = selectedField.dataset.row - 1;

  if (selectedField.tagName !== 'LI' || isGameOver) {
    return;
  }

  if (gameData[selectedRow][selectedCol] > 0) {
    alert('Please select an empty field!');
    return;
  }

  selectedField.textContent = players[activePlayer].symbol;
  selectedField.classList.add('disabled');
  gameData[selectedRow][selectedCol] = activePlayer + 1;

  const winnerId = checkForGameOver();

  if (winnerId !== 0) {
    endGame(winnerId);
  }

  currentRound++;
  switchPlayer();
}

function checkForGameOver() {
  for (let i = 0; i < 3; i++) {
    if (
      gameData[i][0] > 0 &&
      gameData[i][0] === gameData[i][1] &&
      gameData[i][1] === gameData[i][2]
    ) {
      return gameData[i][0];
    }
  }

  for (let i = 0; i < 3; i++) {
    if (
      gameData[0][i] > 0 &&
      gameData[0][i] === gameData[1][i] &&
      gameData[1][i] === gameData[2][i]
    ) {
      return gameData[0][i];
    }
  }

  if (
    gameData[0][0] > 0 &&
    gameData[0][0] === gameData[1][1] &&
    gameData[1][1] === gameData[2][2]
  ) {
    return gameData[0][0];
  }

  if (
    gameData[2][0] > 0 &&
    gameData[2][0] === gameData[1][1] &&
    gameData[1][1] === gameData[0][2]
  ) {
    return gameData[2][0];
  }

  if (currentRound === 9) {
    return -1;
  }
  return 0;
}

function endGame(winnerId) {
  gameOver.classList.remove('hidden');
  isGameOver = true;

  if (winnerId > 0) {
    const winnerName = players[winnerId - 1].name;
    gameOver.firstElementChild.firstElementChild.textContent = winnerName;
  } else {
    gameOver.firstElementChild.textContent = `It's a draw!`;
  }
}
