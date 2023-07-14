'use strict';

//VARIABLES

//Objeto que me servirá para crear las variables
const identifiers = {
  rules : [
    '.js__rulesTitle',
    '.js__rulesContainer'
  ],
  play: '.js__play',
  input: '.js__input',
  counterElement: '.js__counter',
  clueElement: '.js__clue',
  main: '.js__main',
  score: '.js__score',
  welcome: '.js__welcome'
};
let counter = 0;
let randomNumber = 0;
const max = 100;


//FUNCIONES

//Función para añadir clase hidden a la intro
function hidden () {
  const hiddenTag = [...identifiers.rules, identifiers.play];

  hiddenTag.forEach(element => {
    getElement(element).classList.add('hidden');
  });
}

//Función para no repetir querySelector y usar el objeto para establecer variables
function getElement (element) {
  return document.querySelector(element);
}

//Función pra crear mensaje de bienvenida
function welcomeMsg () {
  const welcome = getElement(identifiers.welcome);
  let times = localStorage.getItem('times');
  if (times === null) {
    welcome.innerHTML = '¡Bienvenido/a a "Adivina el Número"!';
    times = 1;
  }else {
    times++;
    welcome.innerHTML = `¡Bienvenido/a de nuevo! Esta es tu visita nº ${times}`;
  }
  localStorage.setItem('times', times);
}

welcomeMsg();

//Función para pintar el HTML del juego
function renderGame () {
  const main = getElement(identifiers.main);
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
  newButton.addEventListener('click', handleClickButton);

  const resetBtn = document.createElement('button');
  resetBtn.setAttribute('type', 'reset');
  resetBtn.setAttribute('class', 'game__form-reset js__reset');
  const resetContent = document.createTextNode('Volver a empezar');
  resetBtn.appendChild(resetContent);
  form.appendChild(resetBtn);
  resetBtn.addEventListener('click', handleClickReset);

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
  const numberElement = getElement(identifiers.input);
  const userNumber = parseInt(numberElement.value);
  return userNumber;
}

//Función para pintar el HTML en el clueElement
function clueText(clue) {
  const clueElement = getElement(identifiers.clueElement);
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
    clueText('¡¡¡Has acertado!!!');
  }else if(userNumber > randomNumber) {
    clueText('Demasiado alto');
  }else if(isNaN(userNumber)) {
    clueText('Debes introducir un número');
  }
}


//EVENTOS

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
  const counterElement = getElement(identifiers.counterElement);
  counterElement.innerHTML = 'Número de intentos: ' + counter;
}

function handleClickReset(event) {
  event.preventDefault();
  getRandomNumber(max);
  randomNumber = getRandomNumber(max);
  randomNumberPainted ();
  const input = getElement(identifiers.input);
  input.value = '';
  counter = 0;
  const counterElement = getElement(identifiers.counterElement);
  counterElement.innerHTML = 'Número de intentos: ' + counter;
  clueText();
  checkNumber();
}

getElement(identifiers.play).addEventListener('click', handleClickPlayButton);