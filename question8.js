// Q8. Marks Calculator 


// Shyam has got his marks in three subjects as A�, B�, and C�(out of 100).Write a program to 
// calculate his total marks and his average.
// Note: You have to complete Sum and Average functions. No need to take any input.
// Input Format 
// The input contains three numbers A�, B�and C�.
// Output Format 
// Return the required result.
// Constraints 
// 0≤A,B,C≤1000≤�,�,�≤100


let a = 50;
let b = 20;
let c = 100;



function SumAndAverage(x, y, z) {
    let sum = x + y + z;
    let avgerage = sum / 3;
    console.log(sum + " " + avgerage);
}
if ((a >= 1 && a <= 100) && (b >= 1 && b <= 100) && (c >= 1 && c <= 100)) {
    SumAndAverage(a, b, c);
}
else {
    console.log("Error Found!");
}