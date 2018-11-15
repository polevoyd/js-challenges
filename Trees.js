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
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (value === current.value) {
          return null;
        }
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  // find a node
  find(value) {
    if (this.root === null) return false;
    
    let current = this.root;
    let found = false;

    while (current && !found) {
      if (value < current.value) { 
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }
}

let tree = new BST();
// tree.root = new BSTNode(10);
// tree.left = new BSTNode(5);
// tree.right = new BSTNode(14);
tree.insert(12);
tree.insert(4);
tree.insert(8);
tree.insert(61);
tree.insert(7);
tree.insert(23);
tree.insert(24);
tree.insert(26);
tree.insert(29);


tree.find(8);

// console.log(tree);

