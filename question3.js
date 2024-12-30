// Q3.Check the conditions 

// You are given two numbers A�and B�. You need to do the following checks:
// 1. if both are divisible by 10 console true.
// 2. if both are not divisible by 10 console false.
// 3. if one of them only is divisible by 10 console true.
// Use operator to do this.
// Note: You have to complete Check function. No need to take any input.
// Input Format 
// The first line contains two natural numbers A�and B�.
// Output Format 
// Return the required result.
// Constraints 
// 1≤A,B≤100001≤�,�≤10000



let a = 12;
let b = 20;


function Check(x, y) {
    if ((x %= 0) && (y %= 0)) {
        console.log("true");
    }
    else if ((x % 10 != 0) && (y % 10 != 0)) {
        console.log("false")
    }
    else if ((x % 10 == 0) && (y % 10 != 0) || (x % 10 != 0) && (y % 10 == 0)) {
        console.log("true");
    }
}
if (a >= 1 && b <= 5001) {
    Check(a, b)
}
else {
    console.log("Error found!");
}