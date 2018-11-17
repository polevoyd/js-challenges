/**
 * Linked data structures are composed of distinct chunks of memory bound
 * together by pointers, and include lists, trees, and graph adjacency lists.
 * 
 * + Insertions and deletions are simpler than for contiguous (array) lists.
 * + Overflow on linked structures can never occur unless the memory full.
 * - Access time is linear
 * - Linked structures require extra space for storing pointer fields.
 * + Efficient sorting (pointer swap vs. copying)?
 * 
 *          Head        Index       Tail
 * Insert   1           N           1
 * Remove   1           N           1
 * Search   N
 * 
 */

class LLNode {
  constructor(value){
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // add to tail
  push(value) {
    let newNode = new LLNode(value);
    if (!this.head){
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // remove from tail
  pop() {
    if (this.length === 0) {
      return null;
    } else {
      let lastNode = this.tail;
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.tail = this.tail.prev;
        this.tail.next = null;
        lastNode.prev = null;
      }
      this.length--;
      return lastNode;
    }
  }

  // print list to console
  traverse(){
    let current = this.head;
    while (current){
      console.log(current.value);
      current = current.next;
    }
  }

  // remove from head
  pop_front(){
    if (this.length === 0) {
      return null;
    }
    let firstNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
    firstNode.next = null;
    firstNode.prev = null;
    this.length--;
    return firstNode;
  }

  // add to head
  push_front(value){
    let newNode = new LLNode(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      newNode.prev = null;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  // get nth element
  get(nth) {
    if ((nth < 0) || (nth > this.length-1)) {
      return null;
    }
    if (this.length-1 - nth < this.length/2) {
      let current = this.tail;
      let counter = this.length-1;
      while (counter !== nth){
        current = current.prev;
        counter--;
      }
      return current;
    } else {
      let current = this.head;
      let counter = 0;
      while (counter < nth){
        current = current.next;
        counter++;
      }
      return current;
    }
  }

  // set nth node value
  set(value, nth){
    if (this.get(nth)) {
      let oldNode = this.get(nth);
      oldNode.value = value;
      return this;
    }
  }

  // insert node with value to nth place
  insert(value, nth){
    if (nth === 0) return this.push_front(value);
    if (this.get(nth)) {
      let newNode = new LLNode(value);
      let oldNode = this.get(nth);
      newNode.next = oldNode;
      newNode.prev = oldNode.prev;
      oldNode.prev.next = newNode;
      oldNode.prev = newNode;
      this.length++;
      return this;
    }
  }

  // remove nth node
  remove(nth){
    if ((nth < 0) || (nth >= this.length)) { return null; }
    if (nth === 0) { return this.pop_front(); }
    if (nth === this.length-1) { return this.pop(); }
    let oldNode = this.get(nth);
    oldNode.prev.next = oldNode.next;
    oldNode.next.prev = oldNode.prev;
    oldNode.next = null;
    oldNode.prev = null;
    this.length--;
    return oldNode;
  }

  // reverse basic
  reverse() {
    if (this.length < 2) {
      return this;
    } else {
      let newList = new DoublyLinkedList();
      let current = this.head;
      while (current) {
        newList.push_front(current.value);
        current = current.next;
      }
      return newList;
    }
  }

  // remove element by value
  removeByValue(value) {
    if (this.length === 0) return null;
    let current = this.head;
    while (current){
      if (current.value === value) {
        current.prev.next = current.next;
        current.next.prev = current.prev;
        current.next = null;
        current.prev = null;
        return current.value;
      }
      current = current.next;
    }
    return null;
  }

  // merge two sorted lists
  merge(list) {
    if (this.length === 0) {return list;}
    if (list.length === 0) {return this;}

    let sumList = new DoublyLinkedList();
    let first = this.head;
    let second = list.head;

    while (second) {
      if ((first.value < second.value) && (first.value)) {
        sumList.push(first.value);
        first = first.next;
      } else {
        sumList.push(second.value);
        second = second.next;
      }
    }
    return sumList;
  }
}

