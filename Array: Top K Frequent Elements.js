/*
Given a non-empty array of integers, return the k most frequent elements.

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]
Note:

You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = function (nums, k) {

    let map = new Map();
    nums.forEach(num => {
        map.has(num) ? map.set(num, map.get(num) + 1) : map.set(num, 0);
    });

    return [...map] 
        .sort((a, b) => { return b[1] - a[1] })
        .map(tuple => tuple[0])
        .slice(0, k);
};
