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

// Function to Generate Permutations
function genPermut(choice,i=-2,stack='') {
  if (i<0 || (i>0 && parseInt(stack.slice(i,i+3))) % DIVISORS[i] == 0) {
    if (choice) {
      let choiceCopy = choice.map((c) => [...c]);
      for (let char of choice) {
        choiceCopy.splice(choiceCopy.indexOf(char),1);
        return genPermut(choiceCopy,i+1,stack + char);
      }
    } else {
        return parseInt(stack);
    }
    }
    return 0;
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
    let digits = Array(n+1).fill(0).map((_,i) => i.toString());
    for (let panDig of genPermut(digits)) {
      sum += panDig;
    }
    return sum;
}

// Function to Clear Information
function clearInfo() {
    let txt = "";
    document.getElementById("numinfo").innerHTML = txt;
}
