/**
 * 0 - green
 * 1 - red
 * 2 - yellow
 * 3 - blue
 */

const colors = ['green', 'red', 'yellow', 'blue'];

let order = [];
// let selections = [];
let step = 0;
let score = 0;

function draw() {
  const drawned = Math.trunc(Math.random() * 4);
  return drawned;
}

function newColorToOrder() {
  const drawned = draw();

  order.push(drawned);

  printState();

  return drawned;
}

function check(selected) {
  let checkStep = 0;
  let checkStatus = false;

  for (let i = 0; i < step; i++) {

  }


  return order[step] === selected;
}

function clear() {
  order = [];
  // selections = [];
  step = 0;
  score = 0;
}

function right() {
  console.log('RIGHT! :)');
  step++;
  score++;
  newColorToOrder();
  playOrder();
}

function wrong() {
  console.log('WRONG! :(');
  clear();
  newColorToOrder();
  playOrder();
  printState();
}

function newSelection(selected) {
  // selections.push(selected);

  if (check(selected)) {
    right();
  } else {
    wrong();
  }
}

function playOne(element, i) {
  console.log(element);
  setTimeout(() => {
    element.classList.add('play');
  }, 500 + i * 1000);

  setTimeout(() => {
    element.classList.remove('play');
    // element.classList.add('unplay');
  }, 1000 + i * 1000);
}

function playOrder() {
  for (let i = 0; i <= step; i++) {
    const element = document.getElementById(String(order[i]));

    playOne(element, i);
  }
}

const geniusArea = document.querySelector('.genius');

geniusArea.addEventListener('click', ({ target }) => {
  // console.log(`${target.className} clicked`);

  newSelection(Number(target.id));
  playOne(target, 0);
});

newColorToOrder();
playOrder();



/** FUNÇÕES PARA TESTES */

function printState() {
  console.log(`${order}\n${step}\n${score}`);
}

function testDrawing(n) {
  const frequencies = [0, 0, 0, 0];

  for (let i = 0; i < n; i++) {
    const drawned = draw();

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