// Q4.Find the first digit of a 4 digit number 

// You are provided a four digit number N only. Your task is to print out the first digit of that 
// number.
// Note: You have to complete First_Digit function. No need to take any input.
// Input Format 
// The first line contains one four digit natural number N�.
// Output Format 
// Return the required result.
// Constraints 
// 1000≤N≤99991000≤�≤9999



let n = 4567;
function First_Digit(x) {
    let res = x / 1000;
    console.log(Math.floor(res));
}
if (n >= 1000 && n <= 9999) {
    First_Digit(n);
}
else {
    console.log("Error Found!");
}