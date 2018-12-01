/*
Palindrome Permutation : Given a string, write a function to check if it is a permutation of a palindrome
Assumption : The palindrome is not case-sensitive 
The string contains only alphabetic characters
*/

const palindromeMutation = (s, ss) => {
  
  if (s.length !== ss.length) return false

  const m = s.split('').reduce((acc, curr) => {
    acc[curr] ? acc[curr]++ : acc[curr] = 1
    return acc
  }, {});

  const mm = ss.split('').reduce((acc, curr) => {
    acc[curr] ? acc[curr]-- : acc[curr] = 1
    return acc
  }, m);

  return Object.values(mm).every(e => e === 0);
}

console.assert(palindromeMutation('hello', 'lloeh'), 'false')
console.assert(!palindromeMutation('hello','lloe'), 'false')
console.assert(palindromeMutation('', ''), 'false')
console.assert(palindromeMutation('he', 'eh'), 'false')
console.assert(palindromeMutation('o', 'o'), 'false')
