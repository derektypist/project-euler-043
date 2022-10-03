// Set Up Global Array
const DIVISORS = [2,3,5,7,11,13,17];

// Function to Show Solution
function showSolution() {
    // Set Up Variable
    let txt = "";
   
    // Apply For Loop
    for (let i=3;i<=9;i++) {
      txt += `With n = ${i}, Solution is ${substringDivisibility(i)} <br>`;
    }
    // Display Information in the Browser
    document.getElementById("solution").innerHTML = txt;
}

// Cycler Function with Recursion.  Returns a number.
function cycler(s,c,n) {
  for (let i=0;i<n+1;i++) {
   if (s.includes(i.toString())) continue;
   let st = s + i.toString();
   if (st.length > 3) {
    if (parseInt(st.slice(st.length-3,st.length)) % DIVISORS[st.length - 4]!=0) continue;
   }
  if (st.length==n+1) {
    c += parseInt(st);
  }
  else {
    c = cycler(st,c,n);
  }
 }
  return c;
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
    return cycler("",0,n);
}

// Function to Clear Solution
function clearSolution() {
    let txt = "";
    document.getElementById("solution").innerHTML = txt;
}
