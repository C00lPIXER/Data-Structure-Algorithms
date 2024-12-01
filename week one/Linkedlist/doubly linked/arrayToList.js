class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addLast(value) {
    let node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    }

    this.tail.next = node;
    this.prev = this.tail;
    this.tail = node;
    this.length++;
  }

  forArray(array) {
    for (let i = 0; i < array.length; i++) {
      this.addLast(array[i]);
    }
  }

  print() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

const list = new LinkedList();

list.forArray([1, 2, 3, 4, 5, 6, 7, 8]);
list.print()