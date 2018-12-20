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
    if (!root) return []
    
    // map to keep all nodes {level : [nodes]}
    let m = {}
    
    // stack for iteration
    let s = []
    
    // starting node and level
    let current = root
    let lvl = 0
    
    let done = false
    
    while (!done) {
        
        // if current alive - 
        // push it to stack and go left
        // while lowering level
        
        if (current) {
            
            s.push(current)
            current = current.left
            --lvl
            
        // if current is dead but
        // there are elements in stack -
        // pop element
        // increment level
        // and add it to map
        // move to right
        // increment level again
            
        } else if (s.length > 0) {
                
                current = s.pop()
                ++lvl
                m[lvl] = m[lvl] ? m[lvl].concat(current.val) : [current.val]
                current = current.right
                ++lvl
                
        // if current is dead
        // and stack is empty
        // switch done to stop
                
        } else done = true
    }

    // m = { '1': [ 3, 15 ], '3': [ 20 ], '4': [ 7 ], '-1': [ 9 ] }
    // sort all entries by keys (levels)
    // return array of values (nodes)
    
    return Object.keys(m)
        .sort((a, b) => parseInt(a) - parseInt(b))
        .map(e => m[e])
};
