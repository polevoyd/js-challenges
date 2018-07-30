function seatsInTheater(nCols, nRows, col, row) {
    /*Given the total number of rows and columns in the theater (nRows and nCols, respectively), and the row and column you're sitting in, return the number of people who sit strictly behind you and in your column or to the left, assuming all seats are occupied.

Example

For nCols = 16, nRows = 11, col = 5, and row = 3, the output should be
seatsInTheater(nCols, nRows, col, row) = 96.*/
    
    return (nCols-col+1)*(nRows-row);
}
