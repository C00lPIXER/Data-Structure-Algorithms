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

  arrayToList(array) {
    for (let i = array.length - 1; i >= 0; i--) {
      const node = new Node(array[i]);
      node.next = this.head;
      this.head = node;
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

list.arrayToList([1, 2, 3, 4, 5]);
list.print();
