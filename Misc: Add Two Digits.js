function addTwoDigits(n) {
/*You are given a two-digit integer n. Return the sum of its digits.

Example

For n = 29, the output should be
addTwoDigits(n) = 11.*/
    
    return Math.floor(n/10 + n%10);
    
}
