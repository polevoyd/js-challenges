/**
 *
 * First in, first out (FIFO)
 * 
 * Enqueue  1
 * Dequeue  1
 * 
 */

class QueueNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // add to tail
  enqueue(value) {
    let newNode = new QueueNode(value);
    if (this.tail === null) {
      this.tail = newNode;
      this.head = newNode;
      this.length++;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
    }
    return this;
  }

  // remove from head
  dequeue() {
    if (this.length === 0) { return null; }
    let old = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return old.value;
    } else {
      this.head = old.next;
      old.next = null;
      this.length--;
      return old.value;
    }
  }
}
