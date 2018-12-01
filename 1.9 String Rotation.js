/*
String Rotation: You have a function "isSubstring" which checks whether a string is substring of another.
Given two strings s1 and s2, write code to check if s2 is a rotation of s1 using only one call to "isSubstring".
*/

const stringRotation = (s, ss) => {
  return (s+s).includes(ss);
}

console.assert(stringRotation('hello', 'lohel')         === true,   '#1 failed');
console.assert(stringRotation('hello', 'lodhel')        === false,  '#2 failed');
console.assert(stringRotation('hlllo', 'lodhel')        === false,  '#3 failed');
console.assert(stringRotation('asdfghjkl', 'fghjklasd') === true,   '#4 failed');
console.assert(stringRotation('gh', 'hg')               === true,   '#5 failed');
console.assert(stringRotation('', '')                   === true,   '#6 failed');
