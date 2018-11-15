// root - main node
// non-linear data structure
// only one root and only parent -> child relationship

class bstNode {
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
}

let tree = new BST();
tree.root = new bstNode(10);



