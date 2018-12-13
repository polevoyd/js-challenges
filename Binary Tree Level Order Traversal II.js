/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

/*
Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its bottom-up level order traversal as:
[
  [15,7],
  [9,20],
  [3]
]
*/

var levelOrderBottom = function(root) {
    
    // creating arr for results
    // passing it to helper function
    // returning it
    
    const result = [];
    visit(root, result, 0);
    return result.reverse();
};

// helper function to traverse tree
// on each level check if this level exist in arr
// if not - create it (its a empty subarray)
// and push current values to that element[level]
// then just repeat that for left and right with level + 1

const visit = (node, arr, level) => {
    if (!node) return null;
    
    if (!arr[level]) arr[level] = [];
    
    arr[level].push(node.val);
    
    if (node.left) visit(node.left, arr, level + 1)
    if (node.right) visit(node.right, arr, level + 1)
}
