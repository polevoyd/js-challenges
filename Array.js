/**
 * Contiguously-allocated structures are composed of single slabs of memory, and
 * include arrays, matrices, heaps, and hash tables.
 * + Constant-time access given the index – Index of each element
 * maps directly to a particular memory address.
 * + Space efficiency – Consist purely of data, so no space is wasted with
 * links or other formatting information.
 * + Memory locality – Excellent memory locality. Good for CPU caching.
 * - Slow insertion in head/index
 *
 *          Head        Index       Tail
 * Insert   N           N           1
 * Remove   N           N           1
 * Search   N
 *
 */

/* First duplicate */
function firstDuplicate(a) {
  let mp = new Map();
  for (let element of a)
    if (mp.has(element))
      return element;
    else
      mp.set(element, 1);
  return -1;
}

// First unique
function firstNotRepeatingCharacter(s) {
  let counter = new Map();
  for (let i of s)
    counter.hasOwnProperty(i) ? counter[i]++ : counter[i] = 1;

  for (let i of Object.keys(counter)) {
    if (counter[i] === 1) return i;
  }
  return '_';
}

// Rotate Matrix
function rotateMatrix(a) {
  // 1 - transpose
  let transposed = [];
  for (let i = 0; i < a.length; i++) {
    let row = [];
    for (let k = 0; k < a.length; k++) {
      row.push(a[k][i]);
    }
    transposed.push(row);
  }
  // 2 - reverse rows
  for (let i = 0; i < transposed.length; i++) {
    transposed[i] = transposed[i].reverse();
  }
  return transposed;
}

// Validate Anagram
function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  const lookup = {};
  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }
  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}

