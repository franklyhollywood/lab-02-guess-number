// import functions and grab DOM elements
import { compareNumbers } from './utils.js';

const userGuess = document.getElementById('inputNumber');
const guessButton = document.getElementById('submitGuess');
const guessEl = document.getElementById('highLow');
const numTries = document.getElementById('numberOfTries');
const resultsEl = document.getElementById('results');
const resetButton = document.getElementById('resetButton');

let secretNumber = Math.ceil(Math.random() * 20);

console.log(userGuess, guessButton, guessEl, numTries, resultsEl, secretNumber);

let counter1 = 0;

resetButton.style.visibility = 'hidden';

guessButton.addEventListener('click', () => {
    counter1++;
    let userNumber = Number(userGuess.value);

    if (counter1 === 1 && userNumber !== secretNumber) {
        numTries.textContent = `you have 3 more tries`;
    } else if (counter1 === 2 && userNumber !== secretNumber) {
        numTries.textContent = `you have 2 more tries`;
    } else if (counter1 === 3 && userNumber !== secretNumber) {
        numTries.textContent = `you have 1 more try`;
    } else if (userGuess === secretNumber) {
        counter1 = 0;
        guessButton.disabled = true;
        guessEl.textContent = 'YOU WIN!';
    } else {
        numTries.textContent = ' ';
    }

    console.log(counter1);

    if (compareNumbers(userNumber, secretNumber) === -1) {
        guessEl.textContent = 'Youre number is too low';
    } else if (compareNumbers(userNumber, secretNumber) === 1) {
        guessEl.textContent = 'Youre number is too high!';
    } else if (compareNumbers(userNumber, secretNumber) === 0) {
        guessEl.textContent = 'You Guessed the secret number!';
    }

    if (counter1 === 4) {
        numTries.textContent = `You are out of guessses.  the number was ${secretNumber}`;
        guessButton.disabled = true;
        resetButton.style.visibility = 'visible';
        guessEl.textContent = '';
    }

    if (userNumber === secretNumber) {
        resetButton.style.visibility = 'visible';
        guessButton.disabled = true;
    }
});

resetButton.addEventListener('click', () => {
    location.reload();
});



//if user guess a number, counter goes up by 1

//console.log(counter1);

// get user input
// use user input to update state
// update DOM to reflect the new state
