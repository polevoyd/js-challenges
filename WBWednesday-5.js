// Given an array of n integers. The task is to remove or delete minimum number of elements 
// from the array so that when the remaining elements are placed in the same sequence order 
// form an ascending sorted sequence.

// Input: an array of unsorted ints (assume no duplicates)
// Output: int


const howManyNumbersToRemove = (arr) => {
  const raisingSequence = (arr) => {
    return arr.reduce((a, c, i) => {
      return a.s.length > 0 ?
             c > a.s[a.s.length - 1] ? { s: [...a.s, c], l: a.l + 1 } : a
             : { s: [c], l: 1 } 
    }, { s: [], l: 0 })
  }
  return Math.abs(
    arr.reduce((a, c, i) => {
      return raisingSequence(arr.slice(i)).l > a.length ? raisingSequence(arr.slice(i)).s : a
      }, []).length - arr.length
  )
}

// Tests
console.log(howManyNumbersToRemove([5, 6, 1, 7, 4])) // 2
console.log(howManyNumbersToRemove([30, 40, 2, 5, 1, 7, 45, 50, 8])) // 4
console.log(howManyNumbersToRemove([1, 3, 2])) // 1
console.log(howManyNumbersToRemove([1, 3, 2, 4])) // 1
console.log(howManyNumbersToRemove([5, 4, 3, 2, 1])) // 4
console.log(howManyNumbersToRemove([60, 70, 80, 3, 2, 10, 20, 4, 5, 30, 6])) // 7
