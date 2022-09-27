// Function to Get Number Information (including Invalid Input)
function getNumberInfo() {
    // Set Up Variable
    let txt = "";
    // Get the value of the Input Field
    let num = document.getElementById("mynumber").value;
    // Check if the input is valid
    if (isNaN(num) || num.length == 0 || num < 2 || num > 9 || (num.length > 1 && num[0] == "0") || !Number.isInteger(Number(num))) {
        txt += `Invalid Input.  Please enter a whole number between 2 and 9 without leading zeros.`;
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
    return Array(numString.length).fill(0).every((_,i) => numString.indexOf(i+1) !== -1);
}

function smallestPandigital(n) {
    return Array(n).fill(0).map((_,i) => n-i).reduce((sum,c) => sum + (n-c) * (10**c));
}
function largestPandigital(n) {
    return Array(n).fill(0).map((_,i) => i).reduce((sum,c) => sum + (c)*(10**c));
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
   for (let i=smallest)
}

// Function to Clear Information
function clearInfo() {
    let txt = "";
    document.getElementById("numinfo").innerHTML = txt;
}
