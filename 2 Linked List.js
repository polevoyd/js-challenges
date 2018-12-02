/**
 * Remove duplicates: Given an unsorted linked list, remove the duplicates from it.
 */

/**
 *  Linked List Class
 */
// Node
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// List
class List {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  //-----------------------------------------------
  // push
  //-----------------------------------------------

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  //-----------------------------------------------
  // pop_front
  //-----------------------------------------------

  pop_front() {
    if (this.length === 0) return null;
    const tmp = this.head;
    this.head = this.head.next;
    this.head.next = null;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return tmp;
  }

  //-----------------------------------------------
  // pop
  //-----------------------------------------------

  pop() {
    if (this.length === 0) return null;
    if (this.length === 1) {
      const tmp = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return tmp;
    }
    let current = this.head;
    while (current.next !== this.tail) {
      current = current.next;
    }
    const tmp = this.tail;
    current.next = null;
    this.tail = current;
    this.length--;
    return tmp;
  }

  //-----------------------------------------------
  // remove
  //-----------------------------------------------

  remove(index) {
    if (!index) return null;
    if ((index < 0) || (index > this.length-1)) return null;
    if (index === 0) return pop_front();
    if (index === this.length-1) return this.pop();
    let current = this.head;
    let i = 0;
    while (i !== index - 1) {
      current = current.next;
      i++;
    }
    const tmp = current.next;
    current.next = current.next.next;
    this.length--;
    return tmp;
  }

  //-----------------------------------------------
  // traverse
  //-----------------------------------------------

  traverse() {
    if (this.length === 0) return null;
    if (this.length === 1) return this.head.value;

    let s = [];
    let current = this.head;
    while (current) {
      s.push(current.value);
      current = current.next;
    }
    console.log(s)
  }

}

let list = new List();
list.push(7);
list.push(2);
list.push(3);
list.push(4);
list.push(2);
list.push(6);
list.push(7);
list.push(3);
list.push(9);

let list2 = new List();
list.push(7);
list.push(2);
list.push(3);
list.push(4);
list.push(6);
list.push(9);


/**
 * Remove Duplicates
 */
const removeDuplicates = ll => {
  if (ll.length === 1) return ll;
  if (ll.length = 0) return ll;
  let tmp = new List();
  const m = {};
  let current = ll.head;
  let index = 0;

  while (current) {
    if (!m[current.value]) {
      m[current.value] = 1;
      tmp.push(current.value);
      current = current.next;
    } else {
      current = current.next;
    }
  }
  return tmp;
}

const removeDuplicatesInPlace = l => {
  if (l.length === 0) return null;
  if (l.length === 1) return l;

  let m = {};
  m[l.head] = 1;
  let i = 1;
  let current = l.head;

  while (current.next) {
    if (!m[current.next.value]) {
      m[current.next.value] = 1;
      current = current.next;
    } else {
        if (i === l.length - 1) {
          l.pop();
        } else {
          current.next = current.next.next;
        }
    }
  }
  return l;
}
// list.traverse()
// removeDuplicates(list).traverse()

// list.traverse();
// removeDuplicatesInPlace(list).traverse();
