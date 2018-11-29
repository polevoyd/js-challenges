/**
 * @param {number[]} digits
 * @return {number[]}
 */

let plusOne = (digits) => {
    
    // number to add
    let memory = 1;
    
    // running loop from end to beginning
    for (let i = digits.length-1; i >= 0 ; i--) {
        
       //  if its going to be more than 10
        if ((digits[i] + memory) === 10) {
            // make it zero and keep memory = 1
            digits[i] = 0;
        } else {
            // if it's less than 10
            // add memory and make it to zero
            digits[i] += memory;
            memory = 0;
        }
    }
    
    // if we have something in memory
    // then add it
    if (memory > 0) {
        digits.unshift(1)
    }
    
    return digits;
};
