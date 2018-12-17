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
Given a binary tree, determine if it is a valid binary search tree (BST).

Assume a BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
Example 1:

Input:
    2
   / \
  1   3
Output: true
Example 2:

    5
   / \
  1   4
     / \
    3   6
Output: false
Explanation: The input is: [5,1,4,null,null,3,6]. The root node's value
             is 5 but its right child's value is 4.
*/

var isValidBST = function(root) {
    
    // Do In-Order Traversal of the given tree and store the result in a temp array.
    // Check if the temp array is sorted in ascending order, if it is, then the tree is BST.
    
    const a = [];
    visit(root, a);
    return a === a.sort((a, b) => a > b)
};

const visit = (node, a) => {
    if (!node) return null
    
    // preorder traversal
    if (node.left) visit(node.left, a)
    a.push(node.val)
    if (node.right) visit(node.right, a)
}
