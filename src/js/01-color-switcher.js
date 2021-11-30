const buttonStart = document.querySelector('[data-start]');


const color = document.body;
let timerRandom;

buttonStart.addEventListener('click', getRandomHexColor);
function getRandomHexColor() {
  return timerRandom = setInterval(() => {
        buttonStart.disabled = true;
    console.log('play random');
    color.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  },1000);
}

const buttonStop = document.querySelector('[data-stop]');
buttonStop.addEventListener('click', stopRandom);
function stopRandom() {
  clearInterval(timerRandom);
  buttonStart.disabled = false;
  console.log('stop random')
}