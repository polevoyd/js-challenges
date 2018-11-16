
/*
In computer science, a linked list is a linear collection of data elements, 
in which linear order is not given by their physical placement in memory. 
Instead, each element points to the next. It is a data structure consisting of 
a group of nodes which together represent a sequence. Under the simplest form, 
each node is composed of data and a reference (in other words, a link) to the 
next node in the sequence. This structure allows for efficient insertion or 
removal of elements from any position in the sequence during iteration. More 
complex variants add additional links, allowing efficient insertion or removal 
from arbitrary element references. A drawback of linked lists is that access time 
is linear (and difficult to pipeline). Faster access, such as random access, 
is not feasible. Arrays have better cache locality as compared to linked lists.
*/
class Node {
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
    let newNode = new Node(value);
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
      length--;
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
    let newNode = new Node(value);
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
      let newNode = new Node(value);
      let oldNode = this.get(nth);
      oldNode.value = value;
      return this;
    }
  }

  // insert node with value to nth place
  insert(value, nth){
    if (nth === 0) return this.push_front(value);
    if (this.get(nth)) {
      let newNode = new Node(value);
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
        let temp = current;
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

  // sort list
  sort() {

  }

}

let list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);
list.push(7);
list.push(8);
list.push(9);
list.push(10);

let list2 = new DoublyLinkedList();
list2.push(1);
list2.push(2);
list2.push(3);
list2.push(4);
list2.push(5);
list2.push(6);
list2.push(7);
list2.push(8);
list2.push(9);
list2.push(10);
// list.push_front(99)
// list.push_front(99)
// list.push_front(99)
// list.pop()
// list.pop_front()
// console.log('-----------------------')
// list.pop();
// list.traverse();
// list.insert(99, 8);
// list.remove(8)
// let reversed = list.reverse();
// reversed.traverse();
// list.removeByValue(5)
// list.traverse();
// list2.traverse();

let sumList = list.merge(list2);
// sumList.traverse();
// list2.traverse();
sumList.sort();

