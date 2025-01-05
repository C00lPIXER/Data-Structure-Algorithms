class Graph {
  constructor() {
    this.adjList = {};
  }

  vertex(vtx) {
    if (this.adjList[vtx]) return;
    this.adjList[vtx] = [];
  }

  add(vtx1, vtx2) {
    if (this.adjList[vtx1] && this.adjList[vtx2]) {
      if (!this.adjList[vtx1].includes(vtx2)) {
        this.adjList[vtx1].push(vtx2);
      }
      if (!this.adjList[vtx2].includes(vtx1)) {
        this.adjList[vtx2].push(vtx1);
      }
    }
  }

  bredthFirstSearch(start) {
    let queue = [];
    let result = [];
    let visited = [];

    queue.push(start);
    visited.push(start);

    while (queue.length) {
      let current = queue.shift();
      result.push(current);

      this.adjList[current].forEach((element) => {
        if (!visited.includes(element)) {
          queue.push(element);
          visited.push(element);
        }
      });
    }

    return result;
  }

  depthFirstSearch(start) {
    let stack = [];
    let result = [];
    let visited = [];

    stack.push(start);
    visited.push(start);

    while (stack.length) {
      let current = stack.pop();
      result.push(current);

      this.adjList[current].forEach((element) => {
        if (!visited.includes(element)) {
          stack.push(element);
          visited.push(element);
        }
      });
    }

    return result;
  }
}

const graph = new Graph();
graph.vertex("A");
graph.vertex("B");
graph.vertex("C");
graph.add("A", "B");
graph.add("A", "C");
console.log(graph.bredthFirstSearch("B"));
console.log(graph.depthFirstSearch("B"));
graph;
