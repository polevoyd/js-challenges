/*
Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.

Note: A leaf is a node with no children.

Example:

Given the below binary tree and sum = 22,

      5
     / \
    4   8
   /   / \
  11  13  4
 /  \      \
7    2      1
return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    
    // if no node - return 0
    if (!root) {
        return (sum = 0)
        
    } else {
        
        // creating accumulating number 
        let ans = 0
        // check current subsum
        let subSum = sum - root.val
        
        // if its 0 and we are at the end - means we find route
        if (subSum == 0 && !root.left && !root.right) {
            return true
        }
        
        // otherwise, if left available - set new number to left recursion
        if (root.left) {
            ans = ans || hasPathSum(root.left, subSum)
        }
        
        // otherwise, if left available - set new number to right recursion
        if (root.right) {
            ans = ans || hasPathSum(root.right, subSum)
        }
        
        return ans
    }
};

