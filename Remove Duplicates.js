const removeDuplicates = (arr) => {
    return Object.entries(
      arr.split('')
      .reduce((acc, curr) => {
      acc[curr] ? acc[curr]++ : acc[curr] = 1;
      return acc
    }, {}))
    .filter(e => e[1] === 1)
    .map(e => e[0]).join('')
}
