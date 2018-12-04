/**
 *  Linked List Class
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


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
  // push_front
  //-----------------------------------------------

  push_front(value) {
    if (value === null) return this;
    
    let newNode = new Node(value);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
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

    let s = [];
    let current = this.head;
    while (current) {
      s.push(current.value);
      current = current.next;
    }
    console.log(s)
  }

  //-----------------------------------------------
  // reverse
  //-----------------------------------------------

  reverse() {
    if (this.length === 0) return null;
    if (this.length === 1) return this;

    let reversed = new List();
    let c = this.head;

    while (c) {
      reversed.push_front(c.value);
      c = c.next;
    }
    return reversed;
  }

}



/**
 * Remove duplicates: Given an unsorted linked list, remove the duplicates from it.
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

/**
 * Return kth to the last: Implement an algorithm to find the kth to last element of a singly linked list
 */

const returnKthToLast = (l, k) => {
  if (l.length === 0) return null;
  let i = 0;  
  let current = l.head;
  while (current) {
    current = current.next;
    i++;
  }
  // i - length of l
  if (k > l) return null;
  let rt = 0;
  let current2 = l.head;
  while (rt !== i-k-1) {
    current2 = current2.next;
    rt++;
  }
  return current2;
}

// list.traverse();
// returnKthToLast(list, 2)

/**
 * Delete middle node: 
 * Implement an algorithm to delete a node in the middle of a singly linked list. 
 * We are given pointer to that node. 
 * Note: We are not given a pointer to the head of the LL
 */

const deleteMiddleNode = (l,n) => {
  // copy next node to current 
  // and remove next one
  if (!n || !n.next) return null;
  let current = n;
  n.value = n.next.value;
  n.next  = n.next.next;
  return l;
}

/*
Partition:
Write code to partition linked list around a value x, such that
nodes less than x come before all the nodes greater than or equal to x.
If x is in the list, the values of x only need to be after the elements less
than x.
Example
3-->5-->8-->5-->10-->2-->1 (x = 5)
3-->1-->2-->5-->5-->10-->8
*/

const partition = (l, x) => {

  if (l.length === 0) return l;
  if (l.length === 1) return l;

  // create a new list
  // and fill it with all X nodes
  let r = new List();
  let c = l.head;
  
  while (c) {
    if (c.value === x) r.push(c.value)
    c = c.next;
  }

  // if list is empty - no x present
  if (r.length === 0) return l;

  // if value < x   - add to front
  // if value > x   - add to back
  // if value === x - skip
  let cc = l.head;
  while (cc) {
    if (cc.value < x) r.push_front(cc.value);
    if (cc.value > x) r.push(cc.value);
    cc = cc.next;
  }
  return r;
}

/**
 * Sum lists: You have two numbers represented by linked list, where each node contains a single digit. Digits are stored in reverse order.(1's digit is at the head). Write a function that adds two such numbers and returns a number in similar list format. 
 * example:
 * 7-->1-->6 + 5-->9-->2 = 2-->1-->9
 * which is (617 + 295  = 912)
 * What if digits are not stored in reverse order(i.e 1's digit is at tail
 * (6--1-->7) + (2-->9-->5) = (9-->1-->2)
 */


  /**
 * Walk through both lists in step summing each digit. Where the sum is greater
 * than 10 then maintain a carry value. Where one list is longer than the other
 * then copy the rest of the digits across adding any carry values.
 *
 * N = max(|list1|, |list2|)
 * Time: O(N)
 * Additional space: O(N) - algorithm doesn't require additional storage in
 * general, additional space is used to create the new list.
 */

// took from careercup repo

const sumListsReverseOrder = (list1, list2) => {
  let head = { next: null }, // pseudo node
    tail = head,
    carry = 0,
    node1 = list1,
    node2 = list2,
    sum;

  while (node1 && node2) {
    sum = node1.value + node2.value + carry;
    if (sum >= 10) {
      carry = 1;
      sum -= 10;
    }
    else {
      carry = 0;
    }
    tail = tail.next = new Node(sum)
    node1 = node1.next;
    node2 = node2.next;
  }

  node1 = node1 || node2; // go through whatever is remaining of the longer list
  while (node1) {
    sum = node1.value + carry;
    if (sum >= 10) {
      carry = 1;
      sum -= 10;
    }
    else {
      carry = 0;
    }
    tail = tail.next = new Node(sum)
    node1 = node1.next;
  }

  if (carry > 0) { // check for any remaining carry
    tail.next = new Node(carry)
  }

  return head.next;
}



let list = new List();
list.push(3);
list.push(5);
list.push(8);

let list2 = new List();
list2.push(5);
list2.push(1);
list2.push(2);
list2.push(5);

// list.traverse();
const s = sumListsReverseOrder(list, list2);
// console.log(list)

/**
Palindrome: Implement a function to check if a linked list is a palindrome
Approach : Use 2 pointers: left and right
Recursively call the function until right reaches the end
Compare left and right pointers
Move left ahead and right backwards
Can also be done iteratively using a stack or reversing the linked list
 */


const isListPalindrome = (l1, l2) => {
  return l1 === l2.reverse()
}


let list = new List();
list.push(3);
list.push(5);
list.push(7);
list.push(9);

let list2 = new List();
list2.push(9);
list2.push(7);
list2.push(5);
list2.push(3);

// console.assert(isListPalindrome(list, list2) === true,            '#1 failed')
// console.assert(isListPalindrome('fwf', 'f') === false,            '#2 failed')
// console.assert(isListPalindrome(new List(), new List()) === true, '#3 failed')


/*
  Intersection: Given 2 singly linked lists, determine if the two lists intersect. Return the   intersecting node.
  Note that the intersection is based on the reference and not the value.
*/

const intersection = (l, ll) => {
  // 1
  // create a hash table and keep Nodes in there
  // then go through second list and check if nodes already in a table
  // if yes - then intersect, return that node
  
  // 2
  // if they ends on a same node:
  //    a - traverse backwards to see where splits
  //    b - cut extra nodes so lists will be same length
  //      - set two pointers at start of lists
  //      - traverse until pointers meet each other
  //      - return that node
  
}

/*
  Loop Detection
  Problem : Determine if a linkedlist has a loop. If it has a loop, find the start of loop.
  Approach : Floyd's Cycle Finding Algo
*/

const loopDetection = (l) => {
  // 1
  // Use hashmap. Collision mean duplicate in a list
  // so we can just find it with a hashmaps
  
  // 2
  // use slow and fast pointer to determine if there is a circle
  // start pointers slow and fast
  // once they meet - move slow to head, keep fast on same place
  // move both at rate of 1 step
  // when they meet - return that node
}

