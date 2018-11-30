/**
 * 1.2 Check Permutation
 */

const isPerm = (s, ss) => {
  if (s.length !== ss.length) return false;
  
  // creating a map for first one
  let m = {};
  for (let c of s) {
    if (m[c]) {
      m[c]++
    } else {
      m[c] = 1
    }
  }

  // checking if its there and -1
  for (let c of ss) {
    if (m[c]) {
      m[c]--
    } else {
      m[c] = 1
    }
  }
  // if values all 0 - then its permutation
  return Object.values(m).every(e => e === 0);
}

console.log(isPerm('hello', 'eholl')) // true
console.log(isPerm('', '')) // true
console.log(isPerm('helg', 'eholl')) // false
console.log(isPerm('hdllo', 'eholl')) // false
