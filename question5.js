// Q5.Find the last digit of a 4 digit number 


// You are provided a four digit number N only. Your task is to print out the last digit of that 
// number.
// Note: You have to complete Last_Digit function. No need to take any input.
// Input Format 
// The first line contains one four digit natural number N�.
// Output Format 
// Return the required result.
// Constraints 
// 1000≤N≤99991000≤�≤9999




let n = 4568;

function Last_Digit(x) {
    let result = x % 10;
    console.log(Math.floor(result))
}
if (n >= 1000 && n <= 9999) {
    Last_Digit(n);
}
else {
    console.log("Error Found!")
}