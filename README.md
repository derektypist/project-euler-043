# Project Euler 043 - Sub-string Divisibility

The number, 1406357289, is a 0 to 9 pandigital number because it is made up of each of the digits 0 to 9 in some order, but it also has a rather interesting sub-string divisibility property.

Let d<sub>1</sub> be the 1st digit, d<sub>2<sub> be the 2nd digit, and so on.  In this way we note the following:

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

**User Stories**

As a user, I expect the function `substringDivisibility(5)` to return a number.

As a user, I expect the function `substringDivisibility(5)` to return 12444480.

As a user, I expect the function `substringDivisibility(7)` to return 1099210170.

As a user, I expect the function `substringDivisibility(8)` to return 1113342912.

As a user, I expect the function `substringDivisibility(9)` to return 16695334890.

User Stories on function `substringDivisibility(n)` taken from 
[FreeCodeCamp - Coding Interview Prep - Project Euler 043](https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-43-sub-string-divisibility)

**Information Architecture**

The function `substringDivisibility(n)` returns a number, where n is a number.


