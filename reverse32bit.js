/**
Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output: 321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21
 */
let reverse = function(x) {
    
    let s = x.toString();
    let r = '';
    for (let i = s.length - 1; i >= 0  ; i--){
        r += s[i];
    }
    r = (x > 0) ? parseInt(r) : parseInt('-' + r);
    return ((r > 2147483647) || (r < -2147483648)) ? 0 : r;
};
