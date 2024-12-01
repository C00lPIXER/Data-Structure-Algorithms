class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  addFirst(value) {
    let node = new Node(value);
    node.next = this.head;
    this.head = node;
  }

  addLast(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }

    current.next = node;
  }

  listSize() {
    let current = this.head;
    let count = 0;
    while (current) {
      count++;
      current = current.next;
    }

    return count;
  }

  addAt(index, value) {
    if (index < 0 || index > this.listSize()) {
      console.error("Invalid index");
      return;
    }

    let node = new Node(value);
    if (index == 0) {
      node.next = this.head;
      this.head = node;
    }

    let current = this.head;
    for (let i = 1; i < index; i++) {
      current = current.next;
    }

    node.next = current.next;
    current.next = node;
  }

  reomveMiddle() {
    let size = this.listSize();
    let middle = Math.floor(size / 2);
    let i = 0;
    let current = this.head;

    while (i < middle - 1) {
      current = current.next;
      i++;
    }

    current.next = current.next.next;
  }

  reverse() {
    let current = this.head;
    let prev = null;

    while (current) {
      const next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    this.head = prev;
  }
}

const linkedList = new LinkedList();

linkedList.addFirst(10);
linkedList.addLast(30);
linkedList.addAt(1, 20);
// linkedList.addLast(40);
// linkedList.addLast(50);
// console.log(linkedList.listSize(30));
console.log(linkedList.head);
// linkedList.reomveMiddle();
// console.log(linkedList);
linkedList.reverse();
console.log(linkedList.head);
