# Project Euler 043 - Sub-string Divisibility

The number, 1406357289, is a 0 to 9 pandigital number because it is made up of each of the digits 0 to 9 in some order, but it also has a rather interesting sub-string divisibility property.

Let d<sub>1</sub> be the 1st digit, d<sub>2</sub> be the 2nd digit, and so on.  In this way we note the following:

- d<sub>2</sub>d<sub>3</sub>d<sub>4</sub>=406 is divisible by 2
- d<sub>3</sub>d<sub>4</sub>d<sub>5</sub>=063 is divisible by 3
- d<sub>4</sub>d<sub>5</sub>d<sub>6</sub>=635 is divisible by 5
- d<sub>5</sub>d<sub>6</sub>d<sub>7</sub>=357 is divisible by 7
- d<sub>6</sub>d<sub>7</sub>d<sub>8</sub>=572 is divisible by 11
- d<sub>7</sub>d<sub>8</sub>d<sub>9</sub>=728 is divisible by 13
- d<sub>8</sub>d<sub>9</sub>d<sub>10</sub>=289 is divisible by 17

Find the sum of all 0 to `n` pandigital numbers with sub-strings fulfilling `n-2` of these divisibility properties.

**NOTE:** Pandigital numbers starting with 0 are to be considered in the result.

Information at [Project Euler 043](https://projecteuler.net/problem=43)

## UX

**Getting Started**

Enter a whole number between 2 and 9 (without leading zeros) and click on the Submit Button.

You will see the sum of all 0 to n pandigital numbers with sub-strings fulfilling n-2 of these divisibility properties unless you have made an invalid input.  For example, if you entered 5, you would get 12444480.  Click on the Reset Button to clear the information or to start again.

**User Stories**

As a user, I expect to get an error message, if I do any of:

- Not enter anything in the input field
- Entering text other than a number
- Entering a number less than 2 or greater than 9
- Including leading zeros (e.g. 02)
- Entering a number, but it is not an integer

As a user, I expect the function `substringDivisibility(5)` to return a number.

As a user, I expect the function `substringDivisibility(5)` to return 12444480.

As a user, I expect the function `substringDivisibility(7)` to return 1099210170.

As a user, I expect the function `substringDivisibility(8)` to return 1113342912.

As a user, I expect the function `substringDivisibility(9)` to return 16695334890.

User Stories on function `substringDivisibility(n)` taken from 
[FreeCodeCamp - Coding Interview Prep - Project Euler 043](https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-43-sub-string-divisibility)

**Information Architecture**

The function `substringDivisibility(n)` returns a number, where n is a number between 2 and 9.

## Features

Allows the user to enter a number in order to get the sum of all 0 to that number of pandigital numbers.  Performs checks on valid user input.  If the input is not valid, an error message is displayed.

## Technologies

Uses HTML5, CSS3, JavaScript, Bootstrap 5.2.1 and Google Fonts.

## Testing

Ensure all user stories have been met.

## Deployment

Deployed on [GitHub Pages](https://derektypist.github.io/project-euler-043) at the main branch.

## Credits

### Content

Written by me.

### Acknowledgements

- [Project Euler](https://projecteuler.net)
- [FreeCodeCamp](https://www.freecodecamp.org)
