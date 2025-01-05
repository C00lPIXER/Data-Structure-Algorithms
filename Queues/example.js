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

  size(){
    return this.queue.length;
  }

  front(){
    return this.queue[0]
  }

  display(){
    console.log(this.queue);
  }
}

const queue = new Queue();

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.display()
queue.dequeue()
queue.display()
console.log(queue.size());
console.log(queue.isEmpty());
console.log(queue.front());


