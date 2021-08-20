export function compareNumbers(guess, correctNumber) {
	// return 0 if numbers are identical
    if (guess === correctNumber) {
        return 0;
    }
	// return -1 if teh guessed number is too low
    if (guess < correctNumber) {
        return -1;
    }
	// return 1 if the guessed number is too high
    if (guess > correctNumber) {
        return 1;
    }
}
