/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
/*
Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.

Note: 
You may assume k is always valid, 1 ≤ k ≤ BST's total elements.

Example 1:

Input: root = [3,1,4,null,2], k = 1
   3
  / \
 1   4
  \
   2
Output: 1
Example 2:

Input: root = [5,3,6,2,4,null,null,1], k = 3
       5
      / \
     3   6
    / \
   2   4
  /
 1
Output: 3
Follow up:
What if the BST is modified (insert/delete operations) often and you need to find the kth smallest frequently? How would you optimize the kthSmallest routine?
*/

var kthSmallest = function(root, k) {
    if (!root) return nul
    // inorder traversal will be a sorted array
    // then we just need to pick K - 1 element from it
    
    let a = [];
    visit(root, a); 
    return a[k-1];
};

// picking inorder values into array
const visit = (node, a) => {
    if (!node) return null
    if (node.left) visit(node.left, a)
    a.push(node.val)
    if (node.right) visit(node.right, a)
}
