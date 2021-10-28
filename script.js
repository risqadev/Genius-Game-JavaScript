// const colors = ['green', 'red', 'yellow', 'blue'];

let order = [];
let level = 0;
let checkStep = 0;

function drawNewColor() {
  const drawned = Math.trunc(Math.random() * 4);

  order.push(drawned);

  return drawned;
}

function right() {
  if (checkStep < level) {
    checkStep++;
  } else {
    level++;
    checkStep = 0;
    refreshLevelDisplay();
    drawNewColor();
    blinkOrder();
  }
}

function wrong() {
  const restartTheGame = confirm(`Você errou!\nNível alcançado: ${level}\nDeseja recomeçar?`);
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

function newSelection(selected) {
  if (selected === order[checkStep]) {
    right();
  } else {
    wrong();
  }
}

function blinkOne(element, i) {
  setTimeout(() => {
    element.classList.add('play');
  }, 100 + i * 1000);

  setTimeout(() => {
    element.classList.remove('play');
  }, 610 + i * 1000);
}

function blinkOrder() {
  setTimeout(() => {

    for (let i = 0; i <= level; i++) {
      const element = document.getElementById(String(order[i]));

      blinkOne(element, i);
    }

  }, 1200);
}

function refreshLevelDisplay() {
  levelDisplay.innerText = level + 1;
}

const geniusArea = document.querySelector('.genius');
const levelDisplay = document.querySelector('.level');

geniusArea.addEventListener('click', ({ target }) => {
  blinkOne(target, 0);
  newSelection(Number(target.id));
});

drawNewColor();
blinkOrder();



/** FUNCTIONS FOR TESTS */

// print application state
function printState() {
  console.log(`${order}\n${level}\n${score}`);
}

// simulate a drawing
function testDrawing(n) {
  const frequencies = [0, 0, 0, 0];

  for (let i = 0; i < n; i++) {
    const drawned = drawNewColor();

    switch (drawned) {
      case 0:
        frequencies[0]++;
        break;
      case 1:
        frequencies[1]++;
        break;
      case 2:
        frequencies[2]++;
        break;
      case 3:
        frequencies[3]++;
        break;
    }
  }

  return frequencies;
}