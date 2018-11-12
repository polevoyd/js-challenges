
// check for a palindrome with recursion
function isPalindrome(str){
  if (str.length === 1) return true;
  return str[0] === str[str.length-1] ? isPalindrome(str.substring(1, str.length-1)) : false;
}

console.log(isPalindrome('awesome') === false) // false
console.log(isPalindrome('foobar') === false) // false
console.log(isPalindrome('tacocat') === true) // true
console.log(isPalindrome('amanaplanacanalpanama') === true) // true
console.log(isPalindrome('amanaplanacanalpandemonium') === false) // false
