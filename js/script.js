// Set Up Global Array
const DIVISORS = [2,3,5,7,11,13,17];

// Function to Get Number Information (including Invalid Input)
function getNumberInfo() {
    // Set Up Variable
    let txt = "";
    // Get the value of the Input Field
    let num = document.getElementById("mynumber").value;
    // Check if the input is valid
    if (isNaN(num) || num.length == 0 || num<2 || num>9 || (num.length > 1 && num[0] == "0") || !Number.isInteger(Number(num))) {
        txt += `Invalid Input.  Please enter a whole number between 2 and 9 without leading zeros.`;
    } else {
        txt += `You have entered the number ${num}.<p>`;
        txt += `Sum of all 0 to ${num} pandigital numbers is ${substringDivisibility(num)}.`;
    }

    // Display Information in the Browser
    document.getElementById("numinfo").innerHTML = txt;
}