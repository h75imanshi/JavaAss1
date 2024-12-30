// Q7.Multiply two Numbers 
// You are provided with two numbers A�and B�. Your task is to multiply these two numbers.
// Note: You have to complete Multiply_two_number function. No need to take any input.
// Input Format 
// The first line contains two integers A�and B�.
// Output Format 
// Return the result after multiplying two numbers.
// Constraints 
// 1≤A,B≤301≤�,�≤30


let a = 10;
let b = 10;

function Multiply_two_numbers(x, y) {
    let res = x * y;
    console.log(res)
}
if (a >= 1 && b <= 301) {
    Multiply_two_numbers(a, b)
}
else {
    console.log("Error Found!");
}