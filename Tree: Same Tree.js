/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    
    
    // we have to compare if nodes have same amount of children and value
    // so, I traversing tree and adding values to array
    // and adding 'l' or 'r' characters depending if children is present
    
    const visit = (node, arr) => {
        if (!node) return null;
        
        arr.push(node.val)
        if (node.left) arr.push('l');
        if (node.right) arr.push('r');
        
        if (node.left) visit(node.left, arr);
        if (node.right) visit(node.right, arr);    
    }
    
    // creating arrays and passing them to function
    const a = [];
    const b = [];
    
    visit(p, a);
    visit(q, b);
    
    // comparing resulting arrays
    return a.join('').toString() === b.join('').toString();
};
