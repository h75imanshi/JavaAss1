// Q6.Find the remainder 


// You are provided with two numbers A�and B�where A�as divisor and B�as dividend.Your 
// task is find the remainder.
// Note: You have to complete Find_the_remainder function. No need to take any input.
// Input Format 
// The first line of the input contains two integers A�and B�.
// Output Format 
// Return the result after finding the remainder.
// Constraints 
// 1≤A,B≤10001≤�,�≤1000


let a = 6;
let b = 25;


function Find_the_remainder(x, y) {
    console.log(y % x);
}
if ((a >= 1) && (b <= 10001)) {
    Find_the_remainder(a, b);
}
else {
    console.log("Error Found!");
}