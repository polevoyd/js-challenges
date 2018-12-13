
// for any index in array n
// left child stored at 2n + 1
// right child stored at 2n + 2

// means...

// for any child at index n
// parent at index (n-1)/2 - floored

// class: BinaryHeap
// properties: []
// size
// methods: insert (add to end and bubble up)
// remove: remove (removing from top min or max and then sink down)
//       : removing top element and put lowest element on its place
//       : then 'sink down' that element until it find corrent place

class Heap {
  constructor() {
    this.data = []
  }

  insert(value) {
    this.data.push(value);

    //-----------------------------
    // bubble up
    //-----------------------------
    // create an index
    let childIndex = this.data.length - 1;
    
    // and element on that index (just for easy reference)
    let childElement = this.data[childIndex];

    // keep loop running while current insertion not on 0 index
    while (childIndex > 0) {

      // create a parent index
      let parentIndex = Math.floor((childIndex - 1)/2);
      let parentElement = this.data[parentIndex];

      // if element <= parent - then it is on right place
      if (childElement < parentElement) break;

      // if not, swap parent and child
      // and set childIndex to be a parentIndex
      this.data[childIndex] = parentElement;
      this.data[parentIndex] = childElement;

      // and updating childIndex to parentIndex
      childIndex = parentIndex;
    }
  }

  // removes top element (min or max)
  remove() {
    // removing head
    // move last element to a head

    // sink down:
    // compare element with both children and swap with bigger one
    // repeat that until no children exist - it will be on corrent place
    const max = this.data[0];
    const end = this.data.pop();
    this.data[0] = end;

    //-----------------------------
    // sink down
    //-----------------------------
    let index = 0;
    const length = this.data.length;
    const element = this.data[0];

    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.data[leftChildIndex];

        if (leftChild > element) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.data[rightChildIndex];
        if (rightChild > element) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.data[rightChildIndex];
        if  ((swap === null && rightChild > element) ||
            (swap !== null && rightChild > leftChild)) {

              swap = rightChildIndex;
        }
      }

      if (swap === null) break;
      this.data[index] = this.data[swap];
      this.data[swap] = element;
      index = swap;
    }
    


    return max;
  }
}


let h = new Heap();
h.insert(41);
h.insert(39);
h.insert(33);
h.insert(18);
h.insert(27);
h.insert(12);
h.insert(55);

console.log(h.remove())

console.log(h.data)
