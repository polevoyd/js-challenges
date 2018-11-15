
class MaxBinaryHeap {
  constructor(){
    this.values = [];
  }

  // insertion
  insert(value) {
    this.values.push(value);
    this.bubbleUp();
  }

  // helper bubble up function
  bubbleUp() {
    let index = this.values.length-1;
    const value = this.values[index];
    while (index > 0) {
      let parentIndex = Math.floor((index-1)/2);
      let parent = this.values[parentIndex];
      if (value <= parent) break;
      this.values[parentIndex] = value;
      this.values[index] = parent;
      index = parentIndex;
    }
  }


  // remove max (extract)
  extract() {
    const root = this.values[0];
    const end = this.values.pop();
    this.values[0] = end;
    this.sinkDown();
    return root;
  }

  sinkDown() {
    let index = 0;
    const length = this.values.length;
    const value = this.values[0];
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild > value) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if ((swap === null && rightChild > value) ||
              (swap !== null && rightChild > leftChild)) {
          swap = rightChildIndex;
        }

        if (swap === null) break;
        this.values[index] = this.values[swap];
        this.values[swap] = value;
        index = swap;
      }
      if (swap === null) break;
    }

  }
}

let heap = new MaxBinaryHeap();
heap.insert(55);
heap.insert(12);
heap.insert(16);
heap.insert(13);
heap.insert(1);
heap.insert(5);
heap.insert(61);
heap.insert(27);
heap.insert(63);

heap.extract();

console.log(heap.values);
heap.extract();
heap.extract();
console.log(heap.values);
heap.extract();
console.log(heap.values);