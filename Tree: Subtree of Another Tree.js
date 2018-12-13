/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
/*
Given two non-empty binary trees s and t, check whether tree t has exactly the same structure and node values with a subtree of s. A subtree of s is a tree consists of a node in s and all of this node's descendants. The tree s could also be considered as a subtree of itself.

Example 1:
Given tree s:

     3
    / \
   4   5
  / \
 1   2
Given tree t:
   4 
  / \
 1   2
Return true, because t has the same structure and node values with a subtree of s.

*/
var isSubtree = function(s, t) {
    
    // if smaller empty - true
    if (!t) return true;
    
    // if main tree is empty - false
    if (!s) return false;
    
    // checking using our helper function
    if (equal(s, t)) {
        return true;
    }
    
    // then if didn't match keep try on children
    return isSubtree(s.left, t) || isSubtree(s.right, t);
};

const equal = (n1, n2) => {
    
    // check if equal
    if (!n1 && !n2) return true;
    if (!n1 || !n2) return false;
    
    // check if data equal
    // in subtrees too
    return (n1.val === n2.val &&
           equal(n1.left , n2.left) &&
           equal(n1.right , n2.right))
    
}

