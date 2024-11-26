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
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }

    current.next = node;
  }

  size() {
    let count = 0;
    let current = this.head;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }

  addAt(index, value) {
    if (index < 0 || index > this.size()) {
      return console.log("linvalid index");
    }

    const node = new Node(value);
    if (index === 0) {
      node.next = this.head;
      this.head = node;
      return;
    }

    let current = this.head;
    for (let i = 1; i < index; i++) {
      current = current.next;
    }

    node.next = current.next;
    current.next = node;
  }

  removeFirst() {
    this.head = this.head.next;
  }

  removeLast() {
    let current = this.head;

    while (current.next == null) {
      current = current.next;
    }

    current.next = null;
  }

  removeAt(index) {
    if (index < 0 || index >= this.size()) {
      return console.log("invalid index");
    }
    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }

    current.next = current.next.next;
  }

  printList() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }

  printReverse(node = this.head) {
    if (!node) return;
    this.printReverse(node.next);
    console.log(node.value);
  }

  reverse() {
    let prev = null;
    let current = this.head;
    
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

linkedList.addFirst(30);
linkedList.addLast(10);
linkedList.addAt(1, 20);
console.log(linkedList);

linkedList.reverse();
console.log(linkedList);

// linkedList.removeFirst();
// linkedList.removeLast();
// linkedList.removeAt(0);
// console.log(linkedList);

// linkedList.printList();
// linkedList.printReverse();

console.log(linkedList.size());
