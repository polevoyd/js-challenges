/*
  Rotate Matrix: Given an image represented by an NxN matrix where each pixel in the image is 4 bytes, write a method to rotate the image by 90 degrees.
*/
 
const rotateMatrix = (a) => {
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

// can be done like that, too
const flipMatrix = matrix => (
  matrix[0].map((column, index) => (
    matrix.map(row => row[index])
  ))
);

// and like that 
rotateImage = a => a.map((row, rowIndex) => a.map(val => val[rowIndex]).reverse())
