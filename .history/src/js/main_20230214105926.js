'use strict';

const { random } = require("lodash");

console.log('>> Ready :)');


//variables

const button = document.querySelector('.js__button');
const numberElement = document.querySelector('.js__input');
const clueElement = document.querySelector('.js__clue');
const counterElement = document.querySelector('.js__counter');
let counter = 0;
let randomNumber = 0;
const max = 100;
//funciones
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

randomNumber = getRandomNumber(max);
console.log('Mi número aleatorio es ' + randomNumber);

function getNumber() {
    const userNumber = numberElement.value;
    console.log(userNumber);
    return userNumber;
}

function checkNumber(userNumber) {
    if(userNumber > randomNumber) {
       clueElement.innerHTML = 'Demasiado alto';
    }else if(userNumber < randomNumber) {
        clueElement.innerHTML = 'Demasiado bajo';
    }else if(userNumber === randomNumber) {
        clueElement.innerHTML = '¡¡¡Has ganado campeona!!!';
    }else if(userNumber > max) {
        clueElement.innerHTML = 'El número debe estar entre 1 y ' + max;
    }
}



//eventos
function handleClickButton(event) {
    event.preventDefault();
    const number = getNumber();
    checkNumber(number);

}


button.addEventListener('click', handleClickButton);
