/**
 * @param {number[]} nums
 * @return {boolean}
 */
/*
Given an array of integers, find if the array contains any duplicates.

Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.
*/

var containsDuplicate = function(nums) {
    // просто создать сет с уникальными значениями
    // и сравнить размер
    // Time: N
    // Space: N
    return nums.length !== new Set(nums).size
};
