'use strict';


console.log('>> Ready :)');


//VARIABLES

const button = document.querySelector('.js__button');
const numberElement = document.querySelector('.js__input');
const clueElement = document.querySelector('.js__clue');
const counterElement = document.querySelector('.js__counter');

let counter = 0;
let randomNumber = 0;
const max = 100;


//FUNCIONES

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
function handleClickButton(event) {
  event.preventDefault();
  const number = getNumber();
  checkNumber(number);
  counter++;
  counterElement.innerHTML = 'Número de intentos: ' + counter;
}

button.addEventListener('click', handleClickButton);
