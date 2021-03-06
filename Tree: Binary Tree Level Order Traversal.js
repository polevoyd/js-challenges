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
Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its level order traversal as:
[
  [3],
  [9,20],
  [15,7]
]
*/

var levelOrder = function(root) {
    if (!root) return null;
    if (!root.val) return null;
    
    // creating a queue and array of visited
    let queue = [];
    let levels = [];
    
    // adding starter root node
    queue.unshift(root);
    levels.push([root.val]);
    
    // while queue not empty
    while (queue.length > 0) {
        
        // subarray for each level
        let subarr = [];
        
        // pop node from queue and add it to queue
        let current = queue.pop();
        
        // then check if it has children - if yes, add them to queue
        // and push to subarray (for each level)
        // for left
        if (current.left) {
            queue.unshift(current.left);
            subarr.push(current.left.val);
        }
        
        // and for right
        if (current.right) {
            queue.unshift(current.right);
            subarr.push(current.right.val);
        }
        
        // adding our subarray to levels array
        if (subarr.length > 0) levels.push(subarr);
    }
    
    return levels;
};

// simpler solution ----------------------------------------------------------------------------------------------

let levelOrder = function(root) {
    // creating arr to store result
    let result = [];
    
    // traversing, passing root, array to fill and starting level
    traverse(root, arr, 0);
    
    // returning array
    return arr;
};

const traverse = (root, arr, level) => {
    if (!root) return null;
    
    // if current level not exist - create it
    if (!arr[level]) arr[level] = [];
    
    // push node to array
    arr[level].push(root.val);
    
    // repeat process on left and right node, with same array and + 1 to level
    traverse(root.left, arr, level + 1)
    traverse(root.right, arr, level + 1)
}
