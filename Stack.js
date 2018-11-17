/**
 * Last-in, first-out (LIFO)
 * 
 * Push  1
 * Pop   1
 * Top   1
 * 
 */

class StackNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  // add to head
  push(value) {
    let newNode = new StackNode(value);
    if (this.length === 0) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  // remove from head
  pop() {
    if (this.length < 1) { return null; }
    if (this.length === 1) {
      let oldNode = this.head;
      this.head = null;
      this.length--;
      return oldNode.value;
    }
    let oldNode = this.head;
    this.head = oldNode.next;
    this.length--;
    return oldNode.value;
  }

  // return value of head
  top() {
    return this.head.value ? this.head.value : null;
  }
}
