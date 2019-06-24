/*

Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it.

Example:

Input: 5
Output:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]

*/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows, currentRow = 0, triangle = []) {
    const end = currentRow > numRows - 1
    const firstOrSecondRow = currentRow => currentRow === 0 || currentRow === 1
    const firstOrLast = (a, i) => i === 0 || i === a.length - 1
    const sumOfTwoPrevious = (previousRow, idx) => triangle[previousRow] && triangle[previousRow][idx - 1] && triangle[previousRow][idx] ? triangle[previousRow][idx - 1] + triangle[previousRow][idx] : 1
    const row = Array(currentRow + 1).fill(1).map((e, i, a) => firstOrSecondRow(currentRow) || firstOrLast(a, i) ? 1 : sumOfTwoPrevious(currentRow - 1, i))
    return end ? triangle : generate(numRows, currentRow + 1, [...triangle, row])
};
