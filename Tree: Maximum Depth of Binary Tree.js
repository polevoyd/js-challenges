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
    // if root dead - height is 0
    if(!root) return 0;
    
    // if not, then start to count
    const heights = [];
    
    // passing node and a height to keep it persistent
    const traverse = (node, height) => {
        
        // if both dead - return current height
        if (!node.left && !node.right) return heights.push(height);
        
        // if left alive - dive in it and pass height + 1
        if(node.left) traverse(node.left, height + 1);
        
        // if right alive - dive in it and pass height + 1
        if(node.right) traverse(node.right, height + 1);
  }
    // start with 1
    traverse(root, 1)
    
    // return max number heights array
    return Math.max(...heights);
}
