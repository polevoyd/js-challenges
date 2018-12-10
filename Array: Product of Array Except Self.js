/**
 * @param {number[]} nums
 * @return {number[]}
 */

/*
Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Example:

Input:  [1,2,3,4]
Output: [24,12,8,6]
Note: Please solve it without division and in O(n).

Follow up:
Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)
*/

var productExceptSelf = function(nums) {
    /*
    {              1,         a[0],    a[0]*a[1],    a[0]*a[1]*a[2],  }
    { a[1]*a[2]*a[3],    a[2]*a[3],         a[3],                 1,  }
    */
    
    // left -> right
    let left = [];
    let p = 1;
    for (let i = 0; i < nums.length; i++) {
        left[i] = p;
        p = p * nums[i]
    }

    // left <- right
    let right = [];
    let d = 1;
    for (let i = nums.length-1; i >= 0; i--) {
        right[i] = d;
        d = d * nums[i]
    }
    
    // result
    let result = [];
    for (let i = 0; i < left.length; i++) {
        let prod = left[i] * right[i];
        result.push(prod)
    }

    return result;
};
