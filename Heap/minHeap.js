class Heap {
  constructor() {
    this.heap = [];
  }

  getParant(child) {
    return Math.floor((child - 1) / 2);
  }

  getLeft(parnt) {
    return 2 * parnt + 1;
  }

  getRight(parnt) {
    return 2 * parnt + 2;
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.heap.length - 1;

    while (index > 0 && this.heap[index] < this.heap[this.getParant(index)]) {
      this.swap(index, this.getParant(index));
      index = this.getParant(index);
    }
  }

  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }

  delete(value) {
    let index = this.heap.indexOf(value);
    if (index === -1) return null;

    let last = this.heap.pop();
    if (last === value) {
      return value;
    }

    this.heap[index] = last;
    this.heapifyDown(index);

    return value;
  }

  heapifyDown(index = 0) {}
}

const heap = new Heap();

heap.insert(13);
heap.insert(33);
heap.insert(23);
heap.insert(53);
heap.insert(73);

heap;

console.log(heap.delete(73));

heap;
