/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */



/*
If root = NULL, return false.
push the root’s data into arr[].
if root’s data = x, return true.
if node x is present in root’s left or right subtree, return true.
Else remove root’s data value from arr[] and return false.
*/
/*
Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

Given binary search tree:  root = [6,2,8,0,4,7,9,null,null,3,5]

        _______6______
       /              \
    ___2__          ___8__
   /      \        /      \
   0      _4       7       9
         /  \
         3   5
Example 1:

Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
Output: 6
Explanation: The LCA of nodes 2 and 8 is 6.
Example 2:

Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
Output: 2
Explanation: The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself 
             according to the LCA definition.
Note:

All of the nodes' values will be unique.
p and q are different and both values will exist in the BST.
*/
var lowestCommonAncestor = function(root, p, q) {
    
    //If the value of p is less than the root and q is less than the root, go to the left
    if (p.val < root.val && q.val < root.val) {
        return lowestCommonAncestor(root.left, p, q);
    }
    
    //If the value of p is greater than the root and q is greater than the root, go to the right
    else if (p.val > root.val && q.val > root.val) {
        return lowestCommonAncestor(root.right, p, q);
    }
    
    //We found it!
    else {
        return root;
    }
};

//-------------------------------------------------------------------------
// shorter, same idea

var lowestCommonAncestor = function(root, p, q) {
    
    // if both p and q less than root - go left
    // if both p and q greater than root - go right
    // any other case -return root - we find it
    
    if (root.val > p && root.val > q) lowestCommonAncestor(root.left, p, q)
    if (root.val < p && root.val < q) lowestCommonAncestor(root.right, p, q)
    else return root
};
