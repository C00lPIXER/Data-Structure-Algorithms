class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(value) {
    this.queue.push(value);
  }

  dequeue() {
    return this.isEmpty() ? "underflow" : this.queue.shift();
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  size() {
    return this.queue.length;
  }

  front() {
    return this.queue[0];
  }

  display() {
    console.log(this.queue);
  }
}

/* _______________________________________________________________________________________________________________
 * 1. Implement a circular queue using an array.
 * _______________________________________________________________________________________________________________
 */

class CircularQueue {
  constructor(size) {
    this.queue = new Array(size);
    this.size = size;
    this.front = -1;
    this.rear = -1;
  }

  enqueue(value) {
    if ((this.rear + 1) % this.size === this.front) return;
    if (this.front === -1) this.front = 0;
    this.rear = (this.rear + 1) % this.size;
    this.queue[this.rear] = value;
  }

  dequeue() {
    if (this.front === -1) return null;
    const value = this.queue[this.front];
    if (this.front === this.rear) {
      this.front = -1;
      this.rear = -1;
    } else {
      this.front = (this.front + 1) % this.size;
    }
    return value;
  }

  display() {
    if (this.front === -1) return [];
    let result = [];
    let i = this.front;
    while (true) {
      result.push(this.queue[i]);
      if (i === this.rear) break;
      i = (i + 1) % this.size;
    }
    return result;
  }
}

const queue = new CircularQueue(5);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.dequeue();
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);
console.log(queue.display());

/* _______________________________________________________________________________________________________________
 * 2. Use a queue to simulate a ticket counter.
 * _______________________________________________________________________________________________________________
 */

class TicketCounter {
  constructor() {
    this.queue = new Queue();
  }

  arrive(customer) {
    this.queue.enqueue(customer);
    console.log(`${customer} has arrived and is waiting.`);
  }

  serve() {
    const customer = this.queue.dequeue();
    if (customer === "underflow") {
      console.log("No customers to serve.");
    } else {
      console.log(`${customer} is being served.`);
    }
  }

  status() {
    console.log("Customers waiting:");
    this.queue.display();
  }
}

const ticketCounter = new TicketCounter();

ticketCounter.arrive("Customer 1");
ticketCounter.arrive("Customer 2");
ticketCounter.arrive("Customer 3");

ticketCounter.status();

ticketCounter.serve();
ticketCounter.serve();

ticketCounter.status();

ticketCounter.serve();
ticketCounter.serve();

/* _______________________________________________________________________________________________________________
 * 3. Implement a priority queue (min-heap).
 * _______________________________________________________________________________________________________________
 */

/* _______________________________________________________________________________________________________________
 * 4. Find the first non-repeating character in a stream of characters.
 * _______________________________________________________________________________________________________________
 */
/* _______________________________________________________________________________________________________________
 * 5. Implement a queue using two stacks.
 * _______________________________________________________________________________________________________________
 */
/* _______________________________________________________________________________________________________________
 * 6. Use a queue to perform level-order traversal of a binary tree.
 * _______________________________________________________________________________________________________________
 */
/* _______________________________________________________________________________________________________________
 * 7. Simulate a real-time task scheduling system using a queue.
 * _______________________________________________________________________________________________________________
 */
/* _______________________________________________________________________________________________________________
 * 8. Reverse a queue using recursion.
 * _______________________________________________________________________________________________________________
 */
/* _______________________________________________________________________________________________________________
 * 9. Find the first negative integer in every window of size k in an array.
 * _______________________________________________________________________________________________________________
 */
/* _______________________________________________________________________________________________________________
 * 10. Design a data structure using a queue that supports the "stack" operations.
 * _______________________________________________________________________________________________________________
 */

class StackUsingQueue {
  constructor() {
    this.queue = [];
  }

  push(value) {
    this.queue.push(value);
    let size = this.queue.length;
    while (size > 1) {
      this.queue.push(this.queue.shift());
      size--;
    }
  }

  pop() {
    return this.queue.length === 0 ? "underflow" : this.queue.shift();
  }

  peek() {
    return this.queue.length === 0 ? null : this.queue[0];
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  size() {
    return this.queue.length;
  }

  display() {
    console.log("Stack (top to bottom):", this.queue);
  }
}

const stack = new StackUsingQueue();

stack.push(1);
stack.push(2);
stack.push(3);

stack.display();

console.log(stack.pop());
stack.display();

console.log(stack.peek());
console.log(stack.size());
console.log(stack.isEmpty());
