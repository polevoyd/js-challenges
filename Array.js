/**
 * Contiguously-allocated structures are composed of single slabs of memory, and
 * include arrays, matrices, heaps, and hash tables.
 * + Constant-time access given the index – Index of each element
 * maps directly to a particular memory address.
 * + Space efficiency – Consist purely of data, so no space is wasted with
 * links or other formatting information.
 * + Memory locality – Excellent memory locality. Good for CPU caching.
 * - Slow insertion in head/index
 *
 *          Head        Index       Tail
 * Insert   N           N           1
 * Remove   N           N           1
 * Search   N
 *
 */

/* First duplicate */
function firstDuplicate(a) {
  let mp = new Map();
  for (let element of a)
    if (mp.has(element))
      return element;
    else
      mp.set(element, 1);
  return -1;
}

// First unique
function firstNotRepeatingCharacter(s) {
  let counter = new Map();
  for (let i of s)
    counter.hasOwnProperty(i) ? counter[i]++ : counter[i] = 1;

  for (let i of Object.keys(counter)) {
    if (counter[i] === 1) return i;
  }
  return '_';
}

// Rotate Matrix
function rotateMatrix(a) {
  // 1 - transpose
  let transposed = [];
  for (let i = 0; i < a.length; i++) {
    let row = [];
    for (let k = 0; k < a.length; k++) {
      row.push(a[k][i]);
    }
    transposed.push(row);
  }
  // 2 - reverse rows
  for (let i = 0; i < transposed.length; i++) {
    transposed[i] = transposed[i].reverse();
  }
  return transposed;
}


/**
 * Given an array of integers nums, write a method that returns the
 * "pivot" index of this array.

We define the pivot index as the index where the sum of the numbers to the
left of the index is equal to the sum of the numbers to the right of the index.

If no such index exists, we should return -1. If there are multiple pivot
indexes, you should return the left-most pivot index.

Example 1:
Input:
nums = [1, 7, 3, 6, 5, 6]
Output: 3
Explanation:
The sum of the numbers to the left of index 3 (nums[3] = 6) is equal to the sum of
numbers to the right of index 3.
Also, 3 is the first index where this occurs.
 */
/**
 * Idea:
 *    - make two sums, left sum set to 0 and right sum of all elements
 *    - loop through array and on each element:
 *        - check if left sum === right sum
 *        - substract current element from left sum and add it to right sum
 */
let pivotIndex = function(nums) {

  let sum1 = 0;
  let sum2 = nums.reduce((accumulator, current) => accumulator += current, 0) - nums[0];

  for (let i = 0; i < nums.length; i++) {
    if (sum1 === sum2) {
      return i;
    } else {
      sum1 += nums[i];
      sum2 -= nums[i+1];
    }
  }
  return -1;
};

/**
 * n a given integer array nums, there is always exactly one largest element.

Find whether the largest element in the array is at least twice as much as every other number in the array.

If it is, return the index of the largest element, otherwise return -1.

Example 1:

Input: nums = [3, 6, 1, 0]
Output: 1
Explanation: 6 is the largest integer, and for every other number in the array x,
6 is more than twice as big as x.  The index of value 6 is 1, so we return 1.
 */

var dominantIndex = function(nums) {
  let largest = -Infinity;
  let largestIndex = -1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > largest) {
      largest = nums[i];
      largestIndex = i;
    }
  }

  for (let i = 0 ; i < nums.length; i++) {
    if ((nums[i] + nums[i] > largest) && (i !== largestIndex)) {
      return -1;
    }
  }

  return largestIndex;
};

function mergeSortedArrays(arr1, arr2) {
  
}

mergeSort(arr) {

}