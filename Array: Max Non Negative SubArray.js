// Find out the maximum sub-array of non negative numbers from an array.
// The sub-array should be continuous. That is, a sub-array created by choosing the second and fourth element and skipping the third element is invalid.

// Maximum sub-array is defined in terms of the sum of the elements in the sub-array. Sub-array A is greater than sub-array B if sum(A) > sum(B).

// Example:

// A : [1, 2, 5, -7, 2, 3]

// The two sub-arrays are [1, 2, 5] [2, 3].
// The answer is [1, 2, 5] as its sum is larger than [2, 3]

// NOTE: If there is a tie, then compare with segment's length and return segment which has maximum length
// NOTE 2: If there is still a tie, then return the segment with minimum starting index

const maxPositiveSubArray = arr => {
  const a = []

  let p1 = 0
  let p2 = 0
  let subarr = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      a.push(subarr)
      p1 = i
      p2 = i
      subarr = []
    } else {
      subarr.push(arr[i])
      p2++
    }
  }

  subarr.length > 0 ? a.push(subarr) : null 
  const sums = a.map(e => e.reduce((a, c) => a + c))
  const maxSumIndex = sums.indexOf(Math.max(...sums))
  const maxSumLongest = sums.reduce((acc,c,i) => {
    return c === Math.max(...sums) && a[i].length > a[maxSumIndex].length ? i : acc
  }, maxSumIndex)

  return a[maxSumLongest]
}

console.log(maxPositiveSubArray([1, 2, 5, -7, 2, 4, 1, 1, -5, 1]))
