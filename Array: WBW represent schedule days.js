/*
write a function that, given some collection of days of the week, returns a string that's 
a shorthand representation of those days.  E.g. a collection containing [ M, Tu, W, F ] 
would return "M-W, F", where consecutive days of the week are separated by a hyphen and 
non-consecutive days are separated with a comma (edited)
Your choice of how to represent days of the week, and the type of the input parameter to the function
*/

// [ Mon, Tue, Wed, Fri ] // => Mon-Wed, Fri

// before check if each element is in {'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'}
// not null and does not repeats
// if length is === 7 - then just return Mon-Sun (can skip extra work)
// if length is === 1 - return that element (can skip extra work)

const f = a =>
  ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  .map(e => a.includes(e) ? e : null)
  .map((e,i,a) => a[i-1] && a[i+1] && e ? '-' : e)
  .map((e,i,a) => a[i-1] && a[i+1] && !e ? ', ' : e)
  .map((e,i,a) => a[i-1] && a[i-1].length === 3 && e && e.length === 3 ? ', ' + e : e)
  .map((e,i,a) => a[i-1] === e ? null : e )
  .join('')

/*************************************************************/
console.log(f(['Mon', 'Tue', 'Wed', 'Fri']))                      // Mon-Wed, Fri
console.log(f(['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'])) // Mon-Sun
console.log(f(['Mon', 'Tue', 'Wed', 'Fri', 'Sat', 'Sun']))        // Mon-Wed, Fri-Sun
console.log(f(['Mon', 'Tue', 'Wed', 'Thu', 'Sat', 'Sun']))        // Mon-Thu, Sat, Sun
console.log(f(['Mon']))                                           // Mon
