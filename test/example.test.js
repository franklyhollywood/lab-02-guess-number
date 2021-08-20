// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { compareNumbers } from '../utils.js';
const test = QUnit.test;

test('time to test a function', (expect) => {
	//Arrange
	// Set up your arguments and expectations
	const expected = 0;

	//Act
	// Call the function you're testing and set the result to a const
	const actual = compareNumbers(3, 3);

	//Expect
	// Make assertions about what is expected versus the actual result
	expect.equal(actual, expected);
});

test('time to test a function', (expect) => {
	//Arrange
	// Set up your arguments and expectations
	const expected = -1;

	//Act
	// Call the function you're testing and set the result to a const
	const actual = compareNumbers(4, 17);

	//Expect
	// Make assertions about what is expected versus the actual result
	expect.equal(actual, expected);
});

test('time to test a function', (expect) => {
	//Arrange
	// Set up your arguments and expectations
	const expected = 1;

	//Act
	// Call the function you're testing and set the result to a const
	const actual = compareNumbers(13, 12);

	//Expect
	// Make assertions about what is expected versus the actual result
	expect.equal(actual, expected);
});
