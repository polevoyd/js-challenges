/*
One away : There are three types of edits that can be performed on strings: 
insert a character, remove a character and replace a character. 
Given two strings, write a function to check if they are one edit (or zero edits) away.
*/

/*
One away : There are three types of edits that can be performed on strings: 
insert a character, remove a character and replace a character. 
Given two strings, write a function to check if they are one edit (or zero edits) away.
*/

// Basically, just check if strings are equal OR differ by one char at maximum

const mapOf = (str) => {
  return str.split('').reduce((acc, cur) => {
    acc[cur] ? acc[cur]++ : acc[cur] = 1
    return acc
  }, {})
}

const oneAway = (s, ss) => {
  if (Math.abs(s.length - ss.length) > 1) return false;
  if (s === ss) return true;
  
  let m, sss;

  // figure out which is longer
  if (s.length > ss.length) {
    m = mapOf(s);
    sss = ss;
  } else {
    m = mapOf(ss);
    sss = s;
  }

  // m - map of long, sss - short string
  for (let c of sss) {
    if (m[c]) {
      m[c]--;
    } else {
      m[c] = 1;
    }
  }
  // sum of values of difference map
  return Object.values(m).reduce((a, c) => a+=c) <= 2;
}

console.assert(oneAway('hello','hllo'),   '#1 failed')
console.assert(oneAway('helo','hmlo'),    '#2 failed')
console.assert(!oneAway('helloo', 'hllo'), '#3 failed')
console.assert(oneAway('o', 'h'),  '#4 failed')
console.assert(oneAway('o', 'o'),  '#5 failed')
console.assert(oneAway('', ''),  '#6 failed')
console.assert(!oneAway('wgewwwhhhe', 'kuiliuyjyu'),  '#7 failed')
console.assert(!oneAway('aaaaaaa', 'aaaaaaaaa'),  '#8 failed')
console.assert(oneAway('hellow', 'hellow'),  '#9 failed')
