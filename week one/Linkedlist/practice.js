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
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
  }

  addLast(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    }

    let current = this.head;
    console.log(this.head);
    while (current.next) {
      current = current.next;
    }
    current.next = node;
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

  addAt(index, value) {
    const node = new Node(value);
    console.log(node);
  }
}

const linkedList = new LinkedList();

linkedList.addFirst(10);
linkedList.addLast(20);
linkedList.addLast(30);
// linkedList.addAt(3, 40);
console.log(linkedList);

linkedList.reverse();
console.log(linkedList);
