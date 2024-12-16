class Stack {
  constructor() {
    this.items = [];
  }

  push(value) {
    this.items.push(value);
  }

  pop() {
    if (this.isEmpty()) return "underflow";
    return this.items.pop();
  }

  isEmpty() {
    return this.items.length == 0;
  }

  peek() {
    if (this.isEmpty()) return "underflow";

    return this.items[this.items.length - 1];
  }

  reverse() {
    const reverseStack = new Stack();
    while (!this.isEmpty()) {
      reverseStack.push(this.pop());
    }
    this.items = reverseStack.items;
  }

  display() {
    return this.isEmpty() ? "underflow" : this.items;
  }
}

let stack = new Stack();

console.log(stack.display());
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
console.log(stack.display());
console.log(stack.peek());
stack.pop();
console.log(stack.display());
console.log(stack.peek());
stack.reverse()
console.log(stack.display());

