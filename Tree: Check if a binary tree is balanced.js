/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

/*
Check if a binary tree is balanced
If difference between max depth and min depth of a tree is more than 1, then its not balanced. Finding min depth is very much same as max depth.


Solution: Find max depth and min depth and see if there difference is 1.
*/

var isBalanced = function(root) {
    
    return maxDepth(root) - minDepth(root) <= 1
};

// minimum depth
const minDepth = (node) => {
    if (!node) return 0
    return Math.min(minDepth(node.left), minDepth(node.right)) + 1
}

// max depth
const maxDepth = (node) => {
    if (!node) return 0
    return Math.max(maxDepth(node.left), maxDepth(node.right)) + 1
}
