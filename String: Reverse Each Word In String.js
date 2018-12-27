const s = 'How are you doing?'

const reverseWords = sentence => {
  return sentence.split(' ')                  // [ How', 'are', 'you', 'doing?' ]
    .map(e => e.split('').reverse().join('')) // [ 'woH', 'era', 'uoy', '?gniod' ]
    .join(' ')                                // 'woH era uoy ?gniod'
}

console.log(reverseWords(s))
