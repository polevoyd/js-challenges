/*
Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.

Example 1:

Input: [3,2,1,5,6,4] and k = 2
Output: 5
Example 2:

Input: [3,2,3,1,2,4,5,5,6] and k = 4
Output: 4
Note: 
You may assume k is always valid, 1 ≤ k ≤ array's length.
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    
    return mergeSort(nums)[k-1]
};

// main sort:
// if length 1 - return itself
// find middle
// do recursion on left half
// do recursion on right half
// return helper merge sorted arrays on left and right halves

const mergeSort = a => {
    if (a.length <= 1) return a
    const middle = Math.floor(a.length/2)
    const left = mergeSort(a.slice(0, middle))
    const right = mergeSort(a.slice(middle))
    return mergeSortedArr(left, right)
}

// merging sorted arrays:
// creating two indexes and empty result array
// while first index less than first array and second less than second array
// compare elements and push lower one, incrementing its index
// then take care of rest elements:
// while indexes not on ends - push elements to result and increment index
// return result arr

const mergeSortedArr = (a, aa) => {
    
    let i = 0
    let ii = 0
    let result = []
    
    while ((i < a.length) && (ii < aa.length)) {
        
        if (a[i] < aa[ii]) {
            result.push(aa[ii])
            ii++
        } else {
            result.push(a[i])
            i++
        }
    }
    
      while (i < a.length) {
            
            result.push(a[i])
            i++
        }
        
        while (ii < aa.length) {
            
            result.push(aa[ii])
            ii++
        }  
        
        return result;
}
