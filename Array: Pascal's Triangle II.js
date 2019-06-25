
/*
Pascal's Triangle II

Given a non-negative index k where k ≤ 33, return the kth index row of the Pascal's triangle.

Note that the row index starts from 0.

In Pascal's triangle, each number is the sum of the two numbers directly above it.

Example:

Input: 3
Output: [1,3,3,1]
Follow up:

Could you optimize your algorithm to use only O(k) extra space?
*/

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    
    // factorial + binomial coef formula
    const fc = n => n === 0 ? 1 : n * fc(n - 1)
    const bC = (a, b) => fc(a) / (fc(a - b) * fc(b))

    return Array(rowIndex + 1).fill(0).map((e, i) => bC(rowIndex, i))
};
