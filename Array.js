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
const firstNotRepeatingCharacter = (s) => {
  let counter = new Map();
  for (let i of s) {
    if (counter.hasOwnProperty(i)){
      counter[i]++;
    } else {
      counter[i] = 1;
    }
  }
  for (let i of Object.keys(counter)) {
    if (counter[i] === 1) return i;
  }
  return '_';
};