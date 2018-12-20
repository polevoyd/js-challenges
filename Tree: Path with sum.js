// Given a binary tree t and an integer s, determine whether 
// there is a root to leaf path in t such that the sum of 
// vertex values equals s.
//
//
// Definition for binary tree:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }

function hasPathWithGivenSum(t, s) {

  let sum = s
  
  // return true if its end of tree
  // and sum is 0
    
  if (!t) return (sum === 0)
  else {
    
    // keep track of answer
    let answer = false
    
    // check both subtrees
    let subSum = s - t.value
    
    // if we reach leaf (end) and sum is 0
    // then return true
    if (subSum === 0 && !t.left && !t.right) return true
    
    if (t.left) answer = answer || hasPathWithGivenSum(t.left, subSum)
    if (t.right) answer = answer || hasPathWithGivenSum(t.right, subSum)
    
    return answer
  }
}
