// Q2. Find if the conditions are obeyed or not? 
// You are given two number first as A� and second as B� and check if both conditions 
// (A<10�<10 and A>B�>�) are satisfied or not with the help of operators.
// Note: You have to complete Is_Valid function. No need to take any input.
// Input Format 
// The first line contains two integers A�and B�.
// Output Format 
// Return the result as true if the given condition gets satisfied, else false.
// Constraints 
// 1≤A,B≤5001≤�,�≤500


let a = 5;
let b = 3;

function is_Valid(x, y) {
    if (x >= 1 && y <= 5001) {
        console.log("true")
    }
    else {
        console.log("false");
    }
}
if (a >= 1 && b <= 5001) {
    is_Valid(a, b);
}
else {
    console.log("Error Found!");
}