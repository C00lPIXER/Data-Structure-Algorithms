class Heap {
  constructor() {
    this.heap = [];
  }

  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }

  getLeftChild(parentIndex) {
    return 2 * parentIndex + 1;
  }

  getRightChild(parentIndex) {
    return 2 * parentIndex + 2;
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.heap.length - 1;

    while (
      index > 0 &&
      this.heap[index] > this.heap[this.getParentIndex(index)]
    ) {
      this.swap(index, this.getParentIndex(index));
      index = this.getParentIndex(index);
    }
  }

  heapifyDown(index = 0) {
    while (this.getLeftChild(index) < this.heap.length) {
      let largeChildIndex = this.getLeftChild(index);

      if (
        this.getRightChild(index) < this.heap.length &&
        this.heap[this.getRightChild(index)] > this.heap[largeChildIndex]
      ) {
        largeChildIndex = this.getRightChild(index);
      }

      if (this.heap[largeChildIndex] <= this.heap[index]) break;

      this.swap(index, largeChildIndex);
      index = largeChildIndex;
    }
  }

  remove(value) {
    let index = this.heap.indexOf(value);
    if (index === -1) return null;

    let lastElement = this.heap.pop();
    if (index === this.heap.length) return lastElement;

    this.heap[index] = lastElement;
    this.heapifyDown(index);
    return value;
  }

  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }
}

const heap = new Heap();
heap.insert(1);
heap.insert(2);
heap.insert(3);
heap.insert(4);
heap.insert(5);
heap.insert(6);

console.log(heap.heap);

console.log(heap.getLeftChild(1));
console.log(heap.getRightChild(1));

console.log(heap.remove(0.3));
console.log(heap.remove(6));

console.log(heap.heap);

console.log("Parant", Math.floor((6 - 1) / 2));
console.log("LChild", 2 * 2 + 1);
console.log("RChild", 2 * 2 + 2);
