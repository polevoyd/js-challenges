/**
 * Is Unique: Implement an algorithm to determine if a string has all unique characters. 
 * What if youcannot use additional data structures?
 */

const uniqueChars = (s) => {
  // creating a map for a string
  let m = new Map();
  // if char already in a map - its duplicate
  for (let c of s) {
    if (m.hasOwnProperty(c)) {
      return false;
    } else {
      m[c] = 1;
    }
  }
  // if not - return true
  return true;
}


console.log(uniqueChars('abcdefg'));  // true
console.log(uniqueChars('a'));        // true
console.log(uniqueChars('abcdbefg')); // false
console.log(uniqueChars('abcdefgg')); // false



