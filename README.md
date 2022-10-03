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

Click on the Show Solution button to show the solution.  The solution ranges from n = 3 to n = 9.  
Click on the Clear Solution Button to clear (hide) the Solution.

**User Stories**

As a user, I can show or clear (hide) the solution.

As a user, I expect the function `substringDivisibility(5)` to return a number.

As a user, I expect the function `substringDivisibility(5)` to return 12444480.

As a user, I expect the function `substringDivisibility(7)` to return 1099210170.

As a user, I expect the function `substringDivisibility(8)` to return 1113342912.

As a user, I expect the function `substringDivisibility(9)` to return 16695334890.

User Stories on function `substringDivisibility(n)` taken from 
[FreeCodeCamp - Coding Interview Prep - Project Euler 043](https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-43-sub-string-divisibility)

**Information Architecture**

The function `substringDivisibility(n)` returns a number, where n is a number between 3 and 9.

## Features

Allows the user to show or clear (hide) the solution as described in [Project Euler 043](https://projecteuler.net/problem=43)

## Technologies

Uses HTML5, CSS3, JavaScript, Bootstrap 5.2.1 and Google Fonts.

## Testing

Ensure all user stories have been met.

## Deployment

Deployed on [GitHub Pages](https://derektypist.github.io/project-euler-043) at the main branch.

Also available on [CodePen](https://codepen.io/derektypist/pen/ZEorgRJ)

Also available on [REPL](https://replit.com/@ddxps46/project-euler-043/#main.py) - Python Version to allow user input.

## Credits

### Content

Function `cycler(s,c,n)` in script.js taken from Xeniafox in the forums of Project Euler 043.  Accessed on 3 October 2022.

### Acknowledgements

- [Project Euler](https://projecteuler.net)
- [FreeCodeCamp](https://www.freecodecamp.org)
