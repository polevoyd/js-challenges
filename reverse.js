
// string reverse recursion
const rev = (word) => {
  if (word.length === 0) return '';
  return [...word].pop().concat(rev(word.slice(0, word.length-1)));
};
