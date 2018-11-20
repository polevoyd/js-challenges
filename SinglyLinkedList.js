// node
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}


class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // add to tail
  push(value){
    let newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }
  // console.log(list)
  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }

  // remove from tail
  pop(){
    if (this.head === null) {
      return null;
    } else {
      let current = this.head;
      let newTail = current;
      while (current.next) {
        newTail = current;
        current = current.next;
      }
      this.tail = newTail;
      this.tail.next = null;
      this.length--;
      if (this.length === 0) {
        this.head = null;
        this.tail = null;
      }
      return current;
    }
  }

  // remove from head
  pop_front(){
    if (this.head === null) {
      return null;
    } else {
      let oldHead = this.head;
      this.head = oldHead.next;
      this.length--;
      if (this.length === 0) {
        this.tail = null;
      }
      return oldHead;
    }
  }

  // add to head
  push_front(value) {
    let newHead = new Node(value);
    if (this.head === null) {
      this.head = newHead;
      this.tail = newHead;
    } else {
      newHead.next = this.head;
      this.head = newHead;
    }
    length++;
    return this;
  }

  // get node at nth
  getNode(nth) {
    if ((nth < 0) || (nth > this.length-1)) {
      return null;
    } else {
      let index = 0;
      let current = this.head;
      while (index !== nth) {
        current = current.next;
        index++;
      }
      return current;
    }
  }

  // set node at nth to value
  setNode(nth, value) {
    if ((nth < 0) || (nth > this.length-1)) {
      return null;
    } else {
      let index = 0;
      let current = this.head;
      while (index !== nth) {
        current = current.next;
        index++;
      }
      current.value = value;
      return this;
    }
  }

  // insert node with value at nth
  insertNode(value, nth) {
    if ((nth < 0) || (nth > this.length-1)) {
      return null;
    } else {
      if (nth === 0) {
        this.push_front(value);
      } else if (nth === this.length-1) {
        this.push(value);
      } else {
        let newNode = new Node(value);
        let preNode = this.head;
        let index = 0;
        while(index !== nth) {
          preNode = preNode.next;
          index++;
        }
        newNode.next = preNode.next.next;
        preNode.next = newNode;
      }
      return this;
    }
  }

  // remove node at nth
  removeNode(nth){
    if ((nth < 1) || (nth > this.length-1)) {
      return null;
    } else {
      let current = this.head;
      let index = 0;
      while (index !== nth-1) {
        current = current.next;
        index++;
      }
      current.next = current.next.next;
    }
  }

  // reverse singly linked list
  reverse() {
    let newList = new SinglyLinkedList();
    newList.length = 0;
    let current = this.head;
    while (current) {
      newList.push_front(current.value);
      current = current.next;
    }
    return newList;
  }

  // rotate list
  
}

let list = new SinglyLinkedList();
list.push('1');
list.push('2');
list.push('3');
list.push('4');
list.push('5');
list.push('6');
list.push('7');
list.push('8');
list.push('9');
list.push('10');
// list.pop();
// list.pop_front();
// list.getNode(0);
// list.setNode(3, 99);
// list.insertNode(100, 1);
// list.removeNode(2)
list.traverse();
// console.log('--------------------------')
// let reversedList = list.reverse();
// reversedList.traverse();
