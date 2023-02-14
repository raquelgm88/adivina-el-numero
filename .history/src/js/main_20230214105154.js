'use strict';

console.log('>> Ready :)');


//variables

const button = document.querySelector('.js__button');
const numberElement = document.querySelector('.js__input');
const clueElement = document.querySelector('.js__clue');
const counterElement = document.querySelector('.js__counter');
let counter = 0;
let randomNumber = 0;

//funciones
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

randomNumber = getRandomNumber(100);
console.log('Mi número aleatorio es ' + randomNumber);

function getNumber() {
    const userNumber = numberElement.value;
    console.log(userNumber);
    return userNumber;
}

function checkNumber(userNumber) {
    if(userNumber > randomNumber) {
       clueElement.innerHTML = 'Demasiado alto';
    }
}



//eventos
function handleClickButton(event) {
    event.preventDefault();
    const number = getNumber();
    checkNumber(number);

}


button.addEventListener('click', handleClickButton);
