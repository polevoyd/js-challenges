/*
URLify :Write a method to replace all spaces in a string with '%20  
You may assume that the string has suf cient space at the end 
to hold the additional characters,and that you are given the "true" length of the string. 
*/

const urlify = (str) => {
  return str.split('').map(e => e === ' ' ? '%20' : e).join('');
}

console.assert(urlify('this is a string') === 'this%20is%20a%20string', 'False'); 
console.assert(urlify('this isstring') === 'this%20isstring', 'False'); 
console.assert(urlify('thisisastring') === 'thisisastring', 'False');
console.assert(urlify(' ') === '%20', 'False');
