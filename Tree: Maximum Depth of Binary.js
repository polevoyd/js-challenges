/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
/*
Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Note: A leaf is a node with no children.
*/

var maxDepth = (root) => {
    
    // if root not alive - return 0
    // if (!root) return 0;
    // return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
    

    return !root ? 0 : Math.max(maxDepth(root.right), maxDepth(root.left)) + 1
}
