class TreeNode {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

//^ Binary Search Tree -----------------------------------------------------------------------------
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  insert(value) {
    const node = new TreeNode(value);
    if (this.isEmpty()) {
      this.root = node;
      return;
    }

    let current = this.root;
    while (true) {
      if (current.value === value) return undefined;

      if (value < current.value) {
        if (current.left === null) {
          current.left = node;
          return;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = node;
        }
        current = current.right;
      }
    }
  }

  includes(value) {
    let current = this.root;

    while (current) {
      if (current.value === value) {
        return true;
      } else if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  delete(value, node = this.root) {
    if (!node) return null;

    if (value < node.value) {
      node.left = this.delete(value, node.left);
    } else if (value > node.value) {
      node.right = this.delete(value, node.right);
    } else {
      if (!node.left && !node.right) return null;
      if (!node.left) return node.right;
      if (!node.right) return node.left;

      let min = this.findMin(node.right);
      node.value = min.value;
      this.delete(min.value, node.right);
    }

    return node;
  }

  findMin(node) {
    while (node.left) {
      node = node.left;
    }
    return node;
  }

  breadthFirstSearch() {
    let result = [];
    let queue = [];
    let current = this.root;

    queue.push(current);
    while (queue.length) {
      current = queue.shift();
      result.push(current.value);

      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }

    return result;
  }

  depthFirstSearch(node = this.root, data = []) {
    if (!node) return data;

    // data.push(node.value); // pre Order
    this.depthFirstSearch(node.left, data);
    // data.push(node.value); // in oreder
    this.depthFirstSearch(node.right, data);
    data.push(node.value); // post oreder
    return data;
  }

  height(node) {
    if (!node) return 0;

    const leftHeight = this.height(node.left);
    const rightHeight = this.height(node.right);

    if (leftHeight === -1 || rightHeight === -1) return -1;
    if (Math.abs(leftHeight - rightHeight) > 1) return -1;

    return Math.max(leftHeight, rightHeight) + 1;
  }

  isBalanced() {
    return this.height(this.root) !== -1;
  }

  isBST(node = this.root, min = -Infinity, max = Infinity) {
    if (!node) return true;

    if (node.value <= min || node.value >= max) return false;

    return (
      this.isBST(node.left, min, node.value) &&
      this.isBST(node.right, node.value, max)
    );
  }
}

const bst = new BinarySearchTree();

bst.insert(100);
bst.insert(125);
bst.insert(75);
bst.insert(50);
bst.insert(150);

console.log(bst.includes(50));

console.log(bst.breadthFirstSearch());

bst.delete(50);

console.log(bst.includes(50));

console.log(bst.breadthFirstSearch());
console.log(bst.depthFirstSearch());

console.log(bst.isBalanced());
console.log(bst.isBST());

//^ Binary Tree -----------------------------------------------------------------------------

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const node = new TreeNode(value);
    if (!this.root) {
      this.root = node;
      return;
    }

    let queue = [this.root];

    while (queue.length) {
      let current = queue.shift();

      if (!current.left) {
        current.left = node;
        return;
      } else {
        queue.push(current.left);
      }

      if (!current.right) {
        current.right = node;
        return;
      } else {
        queue.push(current.right);
      }
    }
  }

  height(node) {
    if (!node) return 0;

    const leftHeight = this.height(node.left);
    const rightHeight = this.height(node.right);

    if (leftHeight === -1 || rightHeight === -1) return -1;
    if (Math.abs(leftHeight - rightHeight) > 1) return -1;

    return Math.max(leftHeight, rightHeight) + 1;
  }

  isBalanced() {
    return this.height(this.root) !== -1;
  }

  isBST(node = this.root, min = -Infinity, max = Infinity) {
    if (!node) return true;

    if (node.value <= min || node.value >= max) return false;

    return (
      this.isBST(node.left, min, node.value) &&
      this.isBST(node.right, node.value, max)
    );
  }
}

const tree = new BinaryTree();

tree.insert(100);
tree.insert(125);
tree.insert(75);
tree.insert(50);
tree.insert(150);

console.log(tree.height(tree.root));
console.log(tree.isBalanced());
console.log(tree.isBST());

tree;

//^ Heap -----------------------------------------------------------------------------
class Heap {
  constructor() {
    this.heap = [];
  }

  getParnt(child) {
    return Math.floor((child - 1) / 2);
  }

  getLeft(parant) {
    return 2 * parant + 1;
  }

  getRight(parant) {
    return 2 * parant + 2;
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    if (index > 0 && this.heap[index] > this.heap[this.getParnt(index)]) {
      this.swap(index, this.getParnt(index));
      index = this.getParnt(index);
    }
  }

  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }

  delete(value) {
    let index = this.heap.indexOf(value);
    if (index === -1) return null;

    let last = this.heap.pop();
    if (last === value) return value;

    this.heap[index] = last;
    this.heapifyDown(index);
  }

  heapifyDown(index = 0) {
    while (this.getLeft(index) < this.heap.length) {
      let largest = this.getLeft(index);

      if (
        this.getRight(index) < this.heap.length &&
        this.heap[largest] < this.heap[this.getRight(index)]
      ) {
        largest = this.getRight(index);
      }

      if (this.heap[largest] <= this.heap[index]) break;
      this.swap(largest, index);
      index = largest;
    }
  }
}

const heap = new Heap();
heap.insert(100);
heap.insert(10);
heap.insert(20);
heap.insert(75);
heap.insert(50);

heap.delete(20);

heap;

//^ Graph -----------------------------------------------------------------------------

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vtx) {
    if (!this.adjacencyList[vtx]) {
      this.adjacencyList[vtx] = [];
    }
  }

  addEdge(vtx1, vtx2) {
    if (this.adjacencyList[vtx1] && this.adjacencyList[vtx2]) {
      if (!this.adjacencyList[vtx1].includes(vtx2)) {
        this.adjacencyList[vtx1].push(vtx2);
      }

      if (!this.adjacencyList[vtx2].includes(vtx1)) {
        this.adjacencyList[vtx2].push(vtx1);
      }
    }
  }

  breadthFirstSearch(start) {
    let queue = [];
    let result = [];
    let visited = [];

    queue.push(start);
    visited.push(start);

    while (queue.length) {
      let current = queue.shift();
      result.push(current);

      this.adjacencyList[current].forEach((element) => {
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

      this.adjacencyList[current].forEach((element) => {
        if (!visited.includes(element)) {
          stack.push(element);
          visited.push(element);
        }
      });
    }

    return result;
  }

  deleteVertex(vertex) {
    if (!this.adjacencyList[vertex]) return;

    for (let adjacentVertex of this.adjacencyList[vertex]) {
      this.adjacencyList[adjacentVertex] = this.adjacencyList[
        adjacentVertex
      ].filter((v) => v !== vertex);
    }

    delete this.adjacencyList[vertex];
  }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");

graph.addEdge("A", "B");
graph.addEdge("C", "D");
graph.addEdge("A", "D");
graph.addEdge("A", "c");
graph.addEdge("D", "B");
graph.addEdge("B", "C");

graph.deleteVertex("C");

console.log(graph.breadthFirstSearch("A"));
console.log(graph.depthFirstSearch("A"));

console.dir(graph, { depth: null });

//^ Trie -----------------------------------------------------------------------------

class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;

    for (let char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }

    node.isEndOfWord = true;
  }

  search(word) {
    let node = this.root;

    for (let char of word) {
      if (!node.children[char]) {
        return false;
      }
      node = node.children[char];
    }

    return node.isEndOfWord;
  }

  searchWith(prefix) {
    let node = this.root;

    for (let char of prefix) {
      if (!node.children[char]) {
        return false;
      }
      node = node.children[char];
    }

    return true;
  }
}

const trie = new Trie();

trie.insert("abhishek");
trie.insert("abhirami");
trie.insert("abeeshna");
trie.insert("abhijith");

console.log(trie.search("abhishek"));
console.log(trie.search("abhij"));
console.log(trie.search("abhijith"));

console.log(trie.searchWith("abhiw"));
console.log(trie.searchWith("amal"));
console.log(trie.searchWith("abe"));

trie;

//^ Heap Sort -----------------------------------------------------------------------------

function heapSort(array) {
  let n = array.length;

  for (let i = Math.floor(n / 2 - 1); i >= 0; i--) {
    heapify(array, n, i);
  }

  for (let j = n - 1; j > 0; j--) {
    [array[0], array[j]] = [array[j], array[0]];
    heapify(array, j, 0);
  }

  return array;
}

function heapify(array, n, i) {
  let largest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;

  if (left < n && array[largest] < array[left]) {
    largest = left;
  }

  if (right < n && array[largest] < array[right]) {
    largest = right;
  }

  if (i !== largest) {
    [array[i], array[largest]] = [array[largest], array[i]];
    heapify(array, n, largest);
  }
}

console.log(heapSort([12, 34, 12, 45, 12, 45, 2, 45, 12, 4, 1, 55]));
