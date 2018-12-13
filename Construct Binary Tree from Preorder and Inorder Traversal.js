/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

/*

Construct Binary Tree from Preorder and Inorder Traversal
Medium
1242
35
Favorite
Share
Given preorder and inorder traversal of a tree, construct the binary tree.

Note:
You may assume that duplicates do not exist in the tree.

For example, given

preorder = [3,9,20,15,7]
inorder = [9,3,15,20,7]
Return the following binary tree:

    3
   / \
  9  20
    /  \
   15   7

*/

var buildTree = function(preorder, inorder) {
    
    // figure out a size of tree
    const n = inorder.length;
    
    // if size is 0 then return null
    if (n === 0) return null;
    
    // taking first element from preorder
    const val = preorder[0];
    
    // creating a root from it
    let root = new TreeNode(val);
    
    // setting a index to 0 and looking for same
    // node but in inorder
    let i = 0;
    for (; i<n; i++) if (inorder[i] === val) break;
    
    // assign left and right to that recursion
    // with alternated preorder and inorder
    root.left = buildTree(preorder.slice(1, i+1), inorder.slice(0, i));
    root.right = buildTree(preorder.slice(i+1, n), inorder.slice(i+1, n));
    
    return root;
};
