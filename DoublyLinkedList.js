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

/**
 *  Challenges
 */

// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
// Given a singly linked list of integers l and an integer k,
// remove all elements from list l that have a value equal to k.

function removeKFromList(l, k) {
  let res = [];
  if (!l) return l;
  let current = l;
  while (current) {
    if (current.value !== k) {
      res.push(current.value);
    }
    current = current.next;
  }
  return res;
}

//Note: Try to solve this task in O(n) time using O(1) additional space,
//where n is the number of elements in l, since this is what you'll be asked to do during an interview.
// Given a singly linked list of integers, determine whether or not it's a palindrome.

function isListPalindrome1(l) {
  // creating array from list
  // checking if array is palindrome
  // N time, N space
  if (!l) return true;
  let current = l;
  let arr = [];
  while (current) {
    arr.push(current.value);
    current = current.next;
  }
  if (arr.length <= 1) return true;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[arr.length-1-i]) {
      return false;
    }
  }
  return true;
}
// from user 'Kov':
/* Basic idea:
 * - Find the center point of the node list, using double steps (fast var) and
 *   reverse the first half of the list.
 * - Walk on the second half and walk back in the first to the first difference.
 * - Return false if found diff, or true if all items are equal.
 *  (divide list by half, reverse first half and compare that two lists side-by-side)
 */
function isListPalindrome2(list) {
  var slow = null,
    fast = list,
    temp;
  // Find center point and reverse the first half of the list
  while (fast && fast.next) {
    fast = fast.next.next;
    temp = list.next;
    list.next = slow;
    slow = list;
    list = temp;
  }
  // If fast not null, list length is odd, ignore the center value
  if (fast) {
    list = list.next;
  }
  // Find the first difference
  while (list) {
    if (slow.value !== list.value) return false;
    slow = slow.next;
    list = list.next;
  }
  // Return true, if no diff
  return true;
}

// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
/*
* Note: Your solution should have O(l1.length + l2.length) time complexity,
since this is what you will be asked to accomplish in an interview.

Given two singly linked lists sorted in non-decreasing order, your task is to
merge them. In other words, return a singly linked list, also sorted in
non-decreasing order, that contains the elements from both original lists.

Example

For l1 = [1, 2, 3] and l2 = [4, 5, 6], the output should be
mergeTwoLinkedLists(l1, l2) = [1, 2, 3, 4, 5, 6];
For l1 = [1, 1, 2, 4] and l2 = [0, 3, 5], the output should be
mergeTwoLinkedLists(l1, l2) = [0, 1, 1, 2, 3, 4, 5].
*/
function mergeTwoLinkedLists(l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;

  let result = [];
  let current1 = l1;
  let current2 = l2;

  // while at least one of lists alive we'll keep going
  while (current1 || current2) {

    // if both alive, compare
    if (current1 && current2) {

      // depends on which smaller, save value
      // and move current
      if (current1.value < current2.value) {

        result.push(current1.value);
        current1 = current1.next;

      } else {

        result.push(current2.value);
        current2 = current2.next;

      }
      // if only first alive
      // save value and move current
    } else if (current1) {

      result.push(current1.value);
      current1 = current1.next;

    } else if (current2) {
      // if only second alive
      // save value and move current
      result.push(current2.value);
      current2 = current2.next;

    }
  }
  return result;
}


/**
 * Given an array of integers nums, write a method that returns the
 * "pivot" index of this array.

We define the pivot index as the index where the sum of the numbers to the
left of the index is equal to the sum of the numbers to the right of the index.

If no such index exists, we should return -1. If there are multiple pivot
indexes, you should return the left-most pivot index.

Example 1:
Input:
nums = [1, 7, 3, 6, 5, 6]
Output: 3
Explanation:
The sum of the numbers to the left of index 3 (nums[3] = 6) is equal to the sum of
numbers to the right of index 3.
Also, 3 is the first index where this occurs.
 */
/**
 * Idea: 
 *    - make two sums, left sum set to 0 and right sum of all elements
 *    - loop through array and on each element:
 *        - check if left sum === right sum
 *        - substract current element from left sum and add it to right sum
 */
let pivotIndex = function(nums) {

  let sum1 = 0;
  let sum2 = nums.reduce((accumulator, current) => accumulator += current, 0) - nums[0];

  for (let i = 0; i < nums.length; i++) {
    if (sum1 === sum2) {
      return i;
    } else {
      sum1 += nums[i];
      sum2 -= nums[i+1];
    }
  }
  return -1;
};