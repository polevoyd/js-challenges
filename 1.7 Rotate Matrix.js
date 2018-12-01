/*
  Rotate Matrix: Given an image represented by an NxN matrix where each pixel in the image is 4 bytes, write a method to rotate the image by 90 degrees.
*/

// 1 switch columns to rows
// 2 reverse rows

const flipMatrix = matrix => (
  matrix[0].map((column, index) => (
    matrix.map(row => row[index])
  ))
);


