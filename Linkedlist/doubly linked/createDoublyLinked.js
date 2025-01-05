class Node {
  constructor(value) {
    this.prev = null;
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addFirst(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      console.log(node);
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    this.length++;
  }

  addLast(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }

    this.length++;
  }

  printList(way) {
    let result = [];
    if (way === 1) {
      let current = this.head;
      while (current) {
        result.push(current.value);
        current = current.next;
      }
    } else {
      let current = this.tail;
      while (current) {
        result.push(current.value);
        current = current.prev;
      }
    }
    return result;
  }

  addMiddle(value) {
    const node = new Node(value);
    let mid = Math.floor(this.length / 2);
    let i = 0;
    let current = this.head;
    while (i < mid) {
      current = current.next;
      i++;
    }

    node.prev = current.prev;
    node.next = current;
    if (current.prev) {
      current.prev.next = node;
    } else {
      this.head = node;
    }
    current.prev = node;
  }
}

const list = new LinkedList();

list.addFirst(10);
list.addFirst(30);
list.addMiddle(20);
console.log(list.printList(1));
