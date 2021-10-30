// const colors = ['green', 'red', 'yellow', 'blue'];

let order = [];
let level = 0;
let checkStep = 0;

const blinkDuration = 300;

const geniusArea = document.querySelector('.genius');
const levelDisplay = document.querySelector('.level');

function drawNewColor() {
  const drawned = (Math.random() * 4) << 0; // Bitwise left shift operation

  order.push(drawned);

  return drawned;
}

function newSelection(selected) {
  if (selected === order[checkStep]) {
    right();
  } else {
    wrong();
  }
}

function right() {
  if (checkStep < level) {
    checkStep++;
  } else {
    nextLevel();
  }
}

function nextLevel() {
  level++;
  checkStep = 0;
  refreshLevelDisplay();
  drawNewColor();
  blinkOrder();
}

function wrong() {
  const restartTheGame = confirm(`Você errou!\nNível alcançado: ${level + 1}\nDeseja recomeçar?`);
  clear();
  if (restartTheGame) {
    refreshLevelDisplay();
    drawNewColor();
    blinkOrder();
  }
}

function clear() {
  order = [];
  level = 0;
  checkStep = 0;
}

function blinkOne(element, i = 0) {
  setTimeout(() => {
    element.classList.add('play');
  }, blinkDuration * 2 * i);

  setTimeout(() => {
    element.classList.remove('play');
  }, blinkDuration * (1 + 2 * i));
}

function blinkOrder() {
  setTimeout(() => {
    for (let i = 0; i <= level; i++) {
      const element = document.getElementById(String(order[i]));
      blinkOne(element, i);
    }
  }, blinkDuration * 3);
}

function setBlinkDurationInStyle() {
  document.querySelector('style').innerHTML = `.play {
    transition-duration: ${blinkDuration}ms;
  }`;
}

function refreshLevelDisplay() {
  levelDisplay.innerText = level + 1;
}

geniusArea.addEventListener('click', ({ target }) => {
  blinkOne(target);
  newSelection(Number(target.id));
});

setBlinkDurationInStyle();
drawNewColor();
blinkOrder();