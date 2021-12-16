const players = [
  {
    name: '',
    symbol: 'X',
  },
  {
    name: '',
    symbol: 'O',
  },
];

const modal = document.querySelector('.modal');
const backdrop = document.querySelector('.backdrop');
const formControl = document.querySelector('.form-control');
const configError = document.querySelector('#config-error');

let editedPlayer = 0;

function openPlayerConfig(event) {
  modal.classList.remove('hidden');
  backdrop.classList.remove('hidden');
  editedPlayer = +event.target.dataset.playerid;
}

function closePlayerConfig() {
  modal.classList.add('hidden');
  backdrop.classList.add('hidden');
  formControl.classList.remove('error');
  formControl.children.playername.value = '';
  configError.textContent = '';
}

function changePlayerName(event) {
  const enteredName = event.target.elements.playername.value.trim();
  event.preventDefault();

  if (!enteredName) {
    formControl.classList.add('error');
    configError.textContent = 'Please enter a valid name!';
    return;
  }

  const playerName = document.querySelector(`#player-${editedPlayer}-name`);
  playerName.textContent = enteredName;
  players[editedPlayer - 1].name = enteredName;
  closePlayerConfig();
}
