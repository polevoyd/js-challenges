function differentSquares(matrix) {
/*
Given a rectangular matrix containing only digits, 
calculate the number of different 2 × 2 squares in it.

Example

For

matrix = [[1, 2, 1],
          [2, 2, 2],
          [2, 2, 2],
          [1, 2, 3],
          [2, 2, 1]]
the output should be
differentSquares(matrix) = 6.
*/

let squares = new Set();
for (let i = 0; i < matrix.length - 1; i++)
        for (let k = 0 ; k < matrix[i].length - 1 ; k++)
                squares.add("s" + matrix[i][k] + matrix[i][k+1] + matrix[i+1][k] + matrix[i+1][k+1]);

    return squares.size;
}
