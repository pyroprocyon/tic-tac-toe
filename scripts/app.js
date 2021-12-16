const editPlayer1Btn = document.querySelector('#edit-p1-btn');
const editPlayer2Btn = document.querySelector('#edit-p2-btn');
editPlayer1Btn.addEventListener('click', openPlayerConfig);
editPlayer2Btn.addEventListener('click', openPlayerConfig);

const cancelConfigBtn = document.querySelector('#cancel-btn');
cancelConfigBtn.addEventListener('click', closePlayerConfig);

const playerConfigForm = document.querySelector('#player-config');
playerConfigForm.addEventListener('submit', changePlayerName);

const startGameBtn = document.querySelector('#start-game-btn');
startGameBtn.addEventListener('click', startNewGame);

const gameBoard = document.querySelector('#game-board');
gameBoard.addEventListener('click', selectGameField);
