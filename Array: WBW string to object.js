// Given a string, return a object with finalized values
// "a=b, b=c, c=1, d=a, e=5" => { a: 1, b: 1, c: 1, d: 1, e: 5}

// Assuming that there is no loops such as {a: b, b: a}

const endValue = (n, m) => m.hasOwnProperty(m[n]) ? endValue(m[n], m) : m[n]
const stringToMap = s => s.split(', ').reduce((a,c) => ({...a, [c[0]]: c[2]}), {})
const finalMap = str => fnEnd => fnMap => Object.keys(fnMap(str))
      .reduce((a,c) => ({...a, [c]: fnEnd(c, fnMap(str))}), {})
    
console.log(finalMap('a=b, b=c, c=1, d=a, e=5')(endValue)(stringToMap))

