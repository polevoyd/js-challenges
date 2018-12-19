//
// Definition for binary tree:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function hasPathWithGivenSum(t, s) {

    // arr to return
    let result = []
    
    // set current node = root
    // and create a empty stack
    let current = t
    let stack = []
    
    // trigger to stop
    let done = false
    
    // while trigger is working
    while (!done) {
        
        // if current is alive - 
        // add it to stack and 
        // go to leftmost node
        if (current) {
            
            stack.push(current)
            current = current.left
            
        } else {
            // if current is not alive -
            // check if stack is empty
            // if yes - set switch to stop
            // if not - pop node from stack
            // save its value and 
            // set current to right
            
            if (stack.length > 0) {
                
                current = stack.pop()
                result.push(current.value)
                current = current.right
                
            } else {
                
                done = true
                
            }
        }
    }
    
    return result  
}
