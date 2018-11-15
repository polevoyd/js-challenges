// root - main node
// non-linear data structure
// only one root and only parent -> child relationship

class BSTNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  // insert
  insert(value) {
    let newNode = new BSTNode(value);
    let current = this.root;

    if (!current) {
      this.root = newNode;
    } else {
      while (current) {
        if (value < current.value){
          if (current.left){
            current = current.left;
          } else {
            current.left = newNode;
            return this; 
          }
          
        } else {
          if (current.right) {
            current = current.right;
          } else {
            current.right = newNode;
            return this;
          }
          
        }
      }
    }

  }


}

let tree = new BST();
tree.root = new BSTNode(10);
tree.left = new BSTNode(5);
tree.right = new BSTNode(14);
tree.insert(12);

console.log(tree);

