'use strict';

//VARIABLES

// const rulesTitle = document.querySelector('.js__rulesTitle');
// const rulesContainer = document.querySelector('.js__rulesContainer');
// const playButton = document.querySelector('.js__play');

const identifiers = {
  rules : [
    '.js__rulesTitle',
    '.js__rulesContainer'
  ],
  play: '.js__play'
};
const button = document.querySelector('.js__button');
const numberElement = document.querySelector('.js__input');
const clueElement = document.querySelector('.js__clue');
const counterElement = document.querySelector('.js__counter');

let counter = 0;
let randomNumber = 0;
const max = 100;


//FUNCIONES

//Función para añadir clase hidden a la intro
function hidden () {
  const hiddenTag = [...identifiers.rules, identifiers.play];

  hiddenTag.forEach(element => {
    document.querySelector(element).classList.add('hidden');
  });
}

//Función para pintar el HTML del juego
function renderGame () {
  const main = document.querySelector('.js__main');
  const section = document.createElement('section');
  section.setAttribute('class', 'game js__game');
  main.appendChild(section);

  const form = document.createElement('form');
  form.setAttribute('action', '#');
  form.setAttribute('class', 'game__form');
  section.appendChild(form);

  const label = document.createElement('label');
  label.setAttribute('for', 'number');
  label.setAttribute('class', 'game__form-label js__number');
  const labelContent = document.createTextNode('Introduce aquí tu número');
  label.appendChild(labelContent);
  form.appendChild(label);

  const input = document.createElement('input');
  input.setAttribute('type', 'number');
  input.setAttribute('name', 'number');
  input.setAttribute('id', 'number');
  input.setAttribute('value', '');
  input.setAttribute('class', 'game__form-number js__input');
  form.appendChild(input);

  const newButton = document.createElement('button');
  newButton.setAttribute('type', 'button');
  newButton.setAttribute('class', 'game__form-button js__button');
  const buttonContent = document.createTextNode('Comprobar');
  newButton.appendChild(buttonContent);
  form.appendChild(newButton);

  const clue = document.createElement('p');
  clue.setAttribute('class', 'game__clue js__clue');
  const clueContent = document.createTextNode('Pista: Escribe un número y haz click en "Comprobar"');
  clue.appendChild(clueContent);
  section.appendChild(clue);

  const counter = document.createElement('p');
  counter.setAttribute('class', 'game__counter js__counter');
  const counterContent = document.createTextNode('Número de intentos: 0');
  counter.appendChild(counterContent);
  section.appendChild(counter);
}

//Función para generar un número aleatorio
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

//Almaceno en la variable randomNumber el número que se genera aleatoriamente
randomNumber = getRandomNumber(max);

//Función para pintar en la consola el número aleatorio
function randomNumberPainted () {
  console.log('Mi número aleatorio es ' + randomNumber);
}
randomNumberPainted();

//Función para extraer el número que escribe el usuario
function getNumber() {
  const userNumber = parseInt(numberElement.value);
  return userNumber;
}

//Función para pintar el HTML en el clueElement
function clueText(clue) {
  clueElement.innerHTML = clue;
}

//Función para comprobar el número que escribe el usuario
function checkNumber(userNumber) {
  if (userNumber === '') {
    clueText('Número de intentos: 0');
  }else if(userNumber > max || userNumber < 1) {
    clueText('El número debe estar entre 1 y ' + max);
  }else if(userNumber < randomNumber) {
    clueText('Demasiado bajo');
  }else if(userNumber === randomNumber) {
    clueText('¡¡¡Has ganado campeona!!!');
  }else if(userNumber > randomNumber) {
    clueText('Demasiado alto');
  }
}

//EVENTO

function handleClickPlayButton (event) {
  event.preventDefault();
  hidden();
  renderGame ();
}

function handleClickButton(event) {
  event.preventDefault();
  const number = getNumber();
  checkNumber(number);
  counter++;
  counterElement.innerHTML = 'Número de intentos: ' + counter;
}

document.querySelector(identifiers.play).addEventListener('click', handleClickPlayButton);

button.addEventListener('click', handleClickButton);
