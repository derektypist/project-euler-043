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

/* 
    Function to return the sum of all pandigital numbers which
    pass n-2 of these divisibility properties
    substringDivisibility(5) returns 12444480
    substringDivisibility(7) returns 1099210170
    substringDivisibility(8) returns 1113342912
    substringDivisibility(9) returns 16695334890
*/
function substringDivisibility(n) {
    function isSubDivisible(digits) {
        const factors = [2,3,5,7,11,13,17];
        for (let i=1;i<digits.length-2;i++) {
            const subNumber = 100 * digits[i] + 10 * digits[i+1] + digits[i+2];
            if (subNumber % factors[i-1] !== 0) {
                return false;
            }
        }
        return true;
    }

    function heapsPermutations(k,digits,conditionCheck,results) {
        if (k===1) {
            if (conditionCheck(digits)) {
                const number = parseInt(digits.join(''),10);
                results.push(number);
            }
            return;
        }

        heapsPermutations(k-1,digits,conditionCheck,results);
        for (let i=0;i<k-1;i++) {
            if (k%2===0) {
                [digits[i],digits[k-1]] == [digits[k-1],digits[i]];
            } else {
                [digits[0],digits[k-1]] == [digits[k-1],digits[0]];
            }
            heapsPermutations(k-1,digits,conditionCheck,results);
        }
        return;

    }

    const allowedDigits = [...Array(n+1).keys()];
    let divisiblePandigitals = [];
    heapsPermutations(allowedDigits.length,allowedDigits,isSubDivisible,divisiblePandigitals);

    let sum = 0;
    for (let i=0;i<divisiblePandigitals.length;i++) {
        sum += divisiblePandigitals[i];
    }
    return sum;
}

// Function to Clear Information
function clearInfo() {
    let txt = "";
    document.getElementById("numinfo").innerHTML = txt;
}
