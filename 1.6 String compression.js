/*
String compression: Implement a method to perform basic string compression using the counts
of repeated characters. For example the string aabcccaaaa will become a2b1c3a4. If the compressed string would NOT become smaller than the original string, your method should return the original string. 
You can assume that the string has only uppercase and lowercase letters
*/

const compressed = (s) => {
  const mapped = s.split('').reduce((acc, curr) => {
    acc[curr] ? acc[curr]++ : acc[curr] = 1
    return acc
  }, {})

  const stringed = Object.entries(mapped)
  .reduce((acc, curr) => {
    return acc + curr[0] + curr[1]
  }, '')

  return stringed.length > s.length ? s : stringed;
}

console.assert(compressed('hello') === 'hello',               '#1 failed');
console.assert(compressed('aaaaaaa') === 'a7',                '#2 failed');
console.assert(compressed('aaabbbcc') === 'a3b3c2',           '#3 failed');
console.assert(compressed('kutuza') === 'kutuza',             '#4 failed');
console.assert(compressed('KuuuuuuuTuza') === 'K1u8T1z1a1',   '#5 failed');
console.assert(compressed('a') === 'a',                       '#6 failed');
console.assert(compressed('') === '',                         '#7 failed');
