
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

heap.values;
