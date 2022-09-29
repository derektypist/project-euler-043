// Set Up Global Array
const DIVISORS = [2,3,5,7,11,13,17];

// Function to Get Number Information (including Invalid Input)
function getNumberInfo() {
    // Set Up Variable
    let txt = "";
    // Get the value of the Input Field
    let num = document.getElementById("mynumber").value;
    // Check if the input is valid
    if (isNaN(num) || num.length == 0 || num < 3 || num > 9 || (num.length > 1 && num[0] == "0") || !Number.isInteger(Number(num))) {
        txt += `Invalid Input.  Please enter a whole number between 3 and 9 without leading zeros.`;
    } else {
        txt += `You have entered the number ${num}.<p>`;
        txt += `Sum of all 0 to ${num} pandigital numbers is ${substringDivisibility(num)}.`;
    }

    // Display Information in the Browser
    document.getElementById("numinfo").innerHTML = txt;
}

// Check if number num is pandigital
function isPandigital(num) {
    const numString = num.toString();
    return Array(numString.length).fill(0).every((_,i) => numString.indexOf(i) !== -1) || Array(numString.length).fill(0).every((_,i) => numString.indexOf(i+1) !== -1);
}

// Function to Get Smallest Pandigital
function smallestPandigital(n) {
    return Array(n).fill(0).map((_,i) => i).reduce((sum,c) => sum + (n-c) * (10**c),0);
}

// Function to Get Largest Pandigital
function largestPandigital(n) {
    return Array(n).fill(0).map((_,i) => i).reduce((sum,c) => sum + (c)*(10**c),0);
}

function testDivisibility(digits,n) {
    for (i=0;i<n-2;i++) {
        let threeDigits = (100 * parseInt(digits[i+1])) + (10 * parseInt(digits[i+2])) + parseInt(digits[i+3]);
        if (threeDigits % DIVISORS[i] !==0) return false;
    }
    return true;
}
/* 
    Function to return the sum of all pandigital numbers which
    pass n-2 of these divisibility properties
    substringDivisibility(5) returns 12444480
    substringDivisibility(7) returns 1099210170
    substringDivisibility(8) returns 1113342912
    substringDivisibility(9) returns 16695334890
*/
function substringDivisibility(n) {
   let sum = 0;
   for (let i=smallestPandigital(n);i<=largestPandigital(n+1);i++) {
    if (isPandigital(i)) {
        let str = i.toString();
        if (str.length < n+1) {
            str = "0" + str;
        }
        if (testDivisibility(str,n)) sum += i;
    }
   }
   return sum;
}

// Function to Clear Information
function clearInfo() {
    let txt = "";
    document.getElementById("numinfo").innerHTML = txt;
}
