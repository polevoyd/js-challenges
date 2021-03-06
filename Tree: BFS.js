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
var levelOrder = function(root) {
    
    // creating a queue and array of visited
    let queue = [];
    let visited = [];
    
    // adding starter root node
    queue.unshift(root);
    
    // while queue not empty
    while (queue.length > 0) {
        
        // pop node from queue and add it to visited
        let current = queue.pop();
        visited.push(current.val)
        
        // then check if it has children - if yes, add them to queue
        if (current.left) queue.unshift(current.left);
        if (current.right) queue.unshift(current.right);
    }
    
    return visited;
};
