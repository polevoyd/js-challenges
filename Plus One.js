// Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

// You may assume the integer does not contain any leading zero, except the number 0 itself.

// Example 1:

// Input: [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Example 2:

// Input: [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.


/**
 * @param {number[]} digits
 * @return {number[]}
 */

let plusOne = (digits) => {
    
    // number to add
    let memory = 1;
    
    // running loop from end to beginning
    for (let i = digits.length-1; i >= 0 ; i--) {
        
       //  if its going to be more than 10
        if ((digits[i] + memory) === 10) {
            // make it zero and keep memory = 1
            digits[i] = 0;
        } else {
            // if it's less than 10
            // add memory and make it to zero
            digits[i] += memory;
            memory = 0;
        }
    }
    
    // if we have something in memory
    // then add it
    if (memory > 0) {
        digits.unshift(1)
    }
    
    return digits;
};
