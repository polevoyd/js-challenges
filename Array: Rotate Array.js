// The following code is supposed to rotate the array A by B positions.

// A : [1 2 3 4 5 6]
// B : 1

// The output :
// [2 3 4 5 6 1]

const rotateArray = (a, steps) => {
  // make it double and cut window with same length, but different start
  return a.concat(a).slice(steps, steps + a.length)
}

rotateArray([1, 2, 3, 4, 5, 6], 2) // [ 3, 4, 5, 6, 1, 2 ]
