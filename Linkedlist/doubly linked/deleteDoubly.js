class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
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
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    this.length++;
  }

  print() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }

  remove(value) {
    if (!this.head) return;

    let current = this.head;

    while (current) {
      if (current.value === value) {
        if (current === this.head) {
          this.head = current.next;
          if (this.head) {
            this.head.prev = null;
          } else {
            this.tail = null;
          }
        } else if (current === this.tail) {
          this.tail = current.prev;
          if (this.tail) {
            this.tail.next = null;
          }
        } else {
          current.prev.next = current.next;
          current.next.prev = current.prev;
        }

        this.length--;
        return;
      }

      current = current.next;
    }
  }
}

const list = new LinkedList();

list.addFirst(1);
list.addFirst(6);
list.addFirst(3);
list.addFirst(2);
list.print();
list.remove(3);
list.print();

console.log(list);
