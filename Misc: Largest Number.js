function largestNumber(n) {

    // Given an integer n, return the largest number that contains exactly n digits.
    
//     Example

//     For n = 2, the output should be
//     largestNumber(n) = 99.

    let rt = '';
    
    for (let i=0; i < n; i++)
        {
            rt += 9;
        }
    
    return parseInt(rt);
    //  return Math.pow(10, n) - 1
}
