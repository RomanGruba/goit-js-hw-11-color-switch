import './styles.css';

const body = document.querySelector('body');

const buttonStart = document.createElement('button');
buttonStart.type = 'button';
buttonStart.dataset.action = 'start';
buttonStart.textContent = 'Start';

const buttonStop = document.createElement('button');
buttonStop.type = 'button';
buttonStop.dataset.action = 'stop';
buttonStop.textContent = 'Stop';

body.prepend(buttonStart, buttonStop);

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function changeColor() {
  body.style.backgroundColor = colors[randomIntegerFromInterval(0, 5)];
}

let timerId = null;

buttonStart.addEventListener('click', startChangingTheme);
buttonStop.addEventListener('click', stopChangingTheme);

function startChangingTheme() {
  timerId = setInterval(changeColor, 1000);
  buttonStart.disabled = true;
  buttonStart.style.color = '#FF0000';
}

function stopChangingTheme() {
  clearInterval(timerId);
  buttonStart.disabled = false;
  buttonStart.style.color = '#FFFFFF';
}
