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
    }

    // Display Information in the Browser
    document.getElementById("numinfo").innerHTML = txt;
}

// Function to Check Divisibility
function testDivisibility(digits,n) {
    for (let i=0;i<n-2;i++) {
        let threeDigits = 100 * digits[i+1] + 10 * digits[i+2] + digits[i+3];
        if (threeDigits % DIVISORS[i] !== 0) return false;
    }
    return true;
}

// Function to Calculate the Factorial of the number num
function factorial(num) {
    return num<=1 ? 1 : num * factorial(num-1);
}

// Function to Permute Digits.  Returns an array.
function permuteDigits(digits) {
    const upperBound = digits.length - 1;
    for (let i=upperBound;i>=0;i--) {
        if (digits[i] < digits[i+1]) {
            for (let j=upperBound;j>i;j--) {
                if (digits[i] < digits[j]) {
                    [digits[i],digits[j]] = [digits[j],digits[i]];
                    const numSwaps = (upperBound - i)/2;
                    for (let k=1;k<=numSwaps;k++) {
                        [digits[i+k],digits[upperBound-k+1]] = [digits[upperBound-k+1],digits[i+k]];
                    }
                    return digits;
                }
            }
        }
    }
    return digits;
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
    const numPermutations = factorial(n+1);
    let permutation = Array(n+1).fill(0).map((_,i) => i);
    for (let i=0;i<numPermutations;i++) {
        if (testDivisibility(permutation,n)) sum += parseInt(permutation.join(""));
        permutation = permuteDigits(permutation);
    }
    return sum;
}

// Function to Clear Information
function clearInfo() {
    let txt = "";
    document.getElementById("numinfo").innerHTML = txt;
}
