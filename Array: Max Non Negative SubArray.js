// Find out the maximum sub-array of non negative numbers from an array.
// The sub-array should be continuous. That is, a sub-array created by choosing the second and fourth element and skipping the third element is invalid.

// Maximum sub-array is defined in terms of the sum of the elements in the sub-array. Sub-array A is greater than sub-array B if sum(A) > sum(B).

// Example:

// A : [1, 2, 5, -7, 2, 3]

// The two sub-arrays are [1, 2, 5] [2, 3].
// The answer is [1, 2, 5] as its sum is larger than [2, 3]

// NOTE: If there is a tie, then compare with segment's length and return segment which has maximum length
// NOTE 2: If there is still a tie, then return the segment with minimum starting index

const maxPositiveSubArray = arr => {
  const a = []

  let p1 = 0
  let p2 = 0
  let subarr = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      a.push(subarr)
      p1 = i
      p2 = i
      subarr = []
    } else {
      subarr.push(arr[i])
      p2++
    }
  }

  subarr.length > 0 ? a.push(subarr) : null 
  const sums = a.map(e => e.reduce((a, c) => a + c))
  const maxSumIndex = sums.indexOf(Math.max(...sums))
  const maxSumLongest = sums.reduce((acc,c,i) => {
    return c === Math.max(...sums) && a[i].length > a[maxSumIndex].length ? i : acc
  }, maxSumIndex)

  return a[maxSumLongest]
}

//------------------------------------------------------------------------------------------------------------------
const maxPositiveSubArray = A => {
    
        var answers = []
        var index_begin = 0
        var index_end = 0
        var current_sum = 0
        var max_sum = -Infinity
        var max_length = 0
        
        
        for (var i = 0; i < A.length; i++) {

            if (A[i] >= 0) {

                current_sum += A[i]

            } else {
                
                if (current_sum > max_sum) {

                    max_sum = current_sum
                    index_end = i
                    answers.push(A.slice(index_begin, index_end))
                    
                } else if (current_sum === max_sum) {

                  if (index_end - index_begin > max_length) {
                    answers.push(A.slice(index_begin, index_end))

                  }
                }

                index_begin = i+1
                index_end = i+1
                
            }
        }

        var longest_max_sum = []
        
        for (var i = 0; i < answers.length; i++) {
            if (answers[i].length > longest_max_sum.length) 
                longest_max_sum = answers[i]
        }
        
        if (A[A.length-1] > max_sum) {
            
          return A[A.length-1]
          
        } else {
            
          return longest_max_sum
          
        }
}

maxPositiveSubArray([ 756898537, -1973594324, -2038664370, -184803526, 1424268980 ])
maxPositiveSubArray([ 1, 2, 5, -7, 2, 5 ])
maxPositiveSubArray([ -846930886, -1714636915, 424238335, -1649760492 ])

//--------------------------------------------------------------------------------------------------------
const maxPositiveSubArray = a => {
    
        var maxset = null;
        var maxsum = 0;
        var currsum = 0;
        var start = 0;
        var i;
        for( i = 0; i < a.length; i++ ) {
            a[i] = +a[i];
            if( a[i] > -1 ) {
                currsum += a[i];
               continue;
            }
            
            var end = i;
            if( !maxset || maxsum < currsum ) {
               maxset = a.slice( start, end );
            
                maxsum = currsum;
            }
            
            if( maxsum === currsum ) { 
                if( end-start > maxset.length ) {
                    maxset = a.slice( start, end );
                    maxsum = currsum;
                }
            }
            
            currsum = 0;
            start = end+1;
        }
        
        var end = i;
        // console.log( "|=>" , maxsum, currsum, maxset );
            if( !maxset || maxsum < currsum ) {
               maxset = a.slice( start, end );
            
                maxsum = currsum;
            }
            
            if( maxsum === currsum ) { 
                if( end-start > maxset.length ) {
                    maxset = a.slice( start, end );
                    maxsum = currsum;
                }
            }
        
        return maxset;
}
