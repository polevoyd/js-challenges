/*
Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

Example 1:

Input:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
Output: [1,2,3,6,9,8,7,4,5]
Example 2:

Input:
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
*/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const sliceMatrix = (m, a, n) => {
        if ((m.length === 0) || (m[0].length === 0)) return a
        
        if (n === 0) {
            const newArr = a.concat(m[0])
            const newMatrix = m.slice(1)
            return sliceMatrix(newMatrix, newArr, n + 1)
        }
        
        if (n === 1) {
            const newArr = a.concat(m.reduce((a, c) => a.concat(Array.of(c[c.length - 1])), []))
            const newMatrix = m.map((e, i) => e.slice(0, e.length - 1))
            return sliceMatrix(newMatrix, newArr, n + 1)
        }

        if (n === 2) {
            const newArr = a.concat(m.pop().reverse())
            const newMatrix = m.slice(0, m.length)
            return sliceMatrix(newMatrix, newArr, n + 1)
        }
        
        if (n === 3) {
            const newArr = a.concat(m.reduce((a, c) => a.concat(Array.of(c[0])), []).reverse())
            const newMatrix = m.map((e, i) => e.slice(1))
            return sliceMatrix(newMatrix, newArr, 0)
        }
    }
    
    return sliceMatrix(matrix, [], 0)
};
