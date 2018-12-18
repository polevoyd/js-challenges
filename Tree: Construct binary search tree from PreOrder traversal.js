/**
 * Construct binary search tree from PreOrder traversal
 */

  const buildBinaryTree = pre => {

          // The first element of pre is always root 
        Node root = new Node(pre[0])
  
        // creating a helper stack
        let s = []

        // Push root to stack
        s.push(root); 
  
        // Iterate through rest of the size-1 items of given preorder array 
        for (let i in pre) { 
            let temp = null 
  
            /* Keep on popping while the next value is greater than 
             stack's top value. */
            while (s.length > 0 && pre[i] > s[s.length-1]) { 
                temp = s.pop(); 
            } 
  
            // Make this greater value as the right child and push it to the stack 
            if (temp) { 
                temp.right = new Node(pre[i]); 
                s.push(temp.right); 
            }  
              
            // If the next value is less than the stack's top value, make this value 
            // as the left child of the stack's top node. Push the new node to stack 
            else { 
                temp = s[s.length-1]; 
                temp.left = new Node(pre[i]); 
                s.push(temp.left); 
            } 
        } 
  
        return root; 
  }
