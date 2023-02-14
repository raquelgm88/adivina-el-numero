'use strict';

console.log('>> Ready :)');


//variables

const button = document.querySelector('.js__button');
const numberElement = document.querySelector('.js__number');
const clueElement = document.querySelector('.js__clue');
const counterElement = document.querySelector('.js__counter');
let counter = 0;


//funciones
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}
getRandomNumber(100);
console.log()



//eventos
function handleClickButton(event) {
    event.preventDefault();

}

button.addEventListener('click', handleClickButton);
