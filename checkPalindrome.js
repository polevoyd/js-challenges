function checkPalindrome(inputString) {
/* Given the string, check if it is a palindrome.

Example

For inputString = "aabaa", the output should be
checkPalindrome(inputString) = true;
For inputString = "abac", the output should be
checkPalindrome(inputString) = false;
For inputString = "a", the output should be
checkPalindrome(inputString) = true. */
    
    for (let i = 0; i < inputString.length ; i++)
            if (inputString[i] !== inputString[inputString.length - 1 - i])
                    return false;

    return true;
}
// shorter one
function checkPalindrome(inputString) {
    return inputString == inputString.split('').reverse().join('');
}
