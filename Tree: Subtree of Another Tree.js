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

/*
Solution 2: We can check the trees node by node also if there is some logic for nodes that do not match.
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


//--------------------------------------------------------------------------
/*
Solution 1: Print the inorder and preoder traversals of both the trees and see if the traversals of
one tree are substrings in other tree's traversals.

However, this solutions requires O(m+n) space where m and n are nodes in respective trees.
If inorder and preorder traversal of the shorter tree are substrings in larger tree, then it is 
fully contained in larger tree.
*/

var isSubtree = function(s, t) {

    let [a, b, aa, bb] = [[],[],[],[]]

    pre(t, a)
    pre(s, b)
    ino(t, aa)
    ino(s, bb)
    
    return a.includes(b)
}


const pre = (node, a) => {
    if (!node) return null    
    a.push(node.val)
    if (node.left)  pre(node.left, a)
    if (node.right) pre(node.right, a)
}

const ino = (node, a) => {
    if (!node) return null
    if (node.left)  ino(node.left, a)
    a.push(node.val)
    if (node.right) ino(node.right, a)
}
