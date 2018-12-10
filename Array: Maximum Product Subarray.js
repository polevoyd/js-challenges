/**
 * @param {number[]} nums
 * @return {number}
 */

/*
Given an integer array nums, find the contiguous subarray within an array (containing at least one number) which has the largest product.

Example 1:

Input: [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.
*/

var maxProduct = function(nums) {
    
    
    // naive again, N2
    
    let max = -Infinity;
    
    for (let i = 0; i < nums.length; i++) {
        let temp = 1;
        for (let ii = i; ii < nums.length; ii++) {
            temp *= nums[ii]
            if (temp > max) 
                max = temp;
        }
    }
    return max
};
    
    
