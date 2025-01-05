class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  insert(value) {
    const node = new Node(value);

    if (this.isEmpty()) {
      this.root = node;
      return this;
    }

    let temp = this.root;

    while (true) {
      if (temp.value === node.value) {
        return undefined;
      }

      if (node.value < temp.value) {
        if (temp.left === null) {
          temp.left = node;
          return this;
        }
        temp = temp.left;
      } else {
        if (temp.right === null) {
          temp.right = node;
          return this;
        }
        temp = temp.right;
      }
    }
  }

  includes(value) {
    let temp = this.root;

    while (temp) {
      if (temp.value === value) {
        return true;
      } else if (value < temp.value) {
        temp = temp.left;
      } else {
        temp = temp.right;
      }
    }

    return false;
  }

  breadthFirstSearch() {
    let current = this.root;
    const queue = [];
    const data = [];

    if (!current) return data;

    queue.push(current);

    while (queue.length) {
      current = queue.shift();
      data.push(current.value);

      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }

    return data;
  }

  //~ Pre Order
  depthFirstSearch(root = this.root, data = []) {
    if (!root) return data;

    data.push(root.value);

    this.depthFirstSearch(root.left, data);
    this.depthFirstSearch(root.right, data);

    return data;
  }

  //~ Post Order
  dfsPostOrder(root = this.root, data = []) {
    if (!root) return data;

    this.dfsPostOrder(root.left, data);
    this.dfsPostOrder(root.right, data);

    data.push(root.value);
    return data;
  }

  //~ In Order
  dfsInOrder(root = this.root, data = []) {
    if (!root) return data;

    this.dfsInOrder(root.left, data);
    data.push(root.value);
    this.dfsInOrder(root.right, data);

    return data;
  }

  delete(value, node = this.root) {
    if (!node) return null;

    if (value < node.value) {
      node.left = this.delete(value, node.left);
    } else if (value > node.value) {
      node.right = this.delete(value, node.right);
    } else {
      if (!node.right && !node.left) return null;
      if (!node.right) return node.left;
      if (!node.left) return node.right;

      let minNode = this.findMin(node.right);
      node.value = minNode;
      node.right = this.delete(minNode, node.right);
    }

    return node;
  }

  findMin(root) {
    while (root.left) {
      root = root.left;
    }
    return root.value;
  }

  findMax(root) {
    while (root.right) {
      root = root.right;
    }
    return root.value;
  }

  findClosest(target) {
    let closest = this.root.value;
    let current = this.root;

    while (current) {
      if (Math.abs(target - current.value) < Math.abs(target - closest)) {
        closest = current.value;
      }

      if (target < current.value) {
        current = current.left;
      } else if (target > current.value) {
        current = current.right;
      } else {
        return current.value;
      }
    }

    return closest;
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

const tree = new BinarySearchTree();
console.log(tree.isEmpty());

tree.insert(25);
tree.insert(15);
tree.insert(40);
tree.insert(10);
tree.insert(15);
tree.insert(20);
tree.insert(30);
tree.insert(45);

console.log(tree.includes(20));
console.log(tree.includes(50));

console.log(tree.breadthFirstSearch());
console.log(tree.depthFirstSearch());
console.log(tree.dfsPostOrder());
console.log(tree.dfsInOrder());

tree.delete(4);

console.log(tree.breadthFirstSearch());

console.log(tree.findMax(tree.root));
console.log(tree.findMin(tree.root));

console.log(tree.findClosest(12));
console.log(tree.findClosest(23));

console.log(tree.isBST());

console.dir(tree, { depth: null });

//^ Array to binary search tree
let array = [25, 40, 10, 20, 30, 45, 15, 23, 56, 1, 5, 76, 12, 34, 56];

const arrayToTree = new BinarySearchTree();

for (let i = 0; i < array.length; i++) {
  arrayToTree.insert(array[i]);
}

const tree1 = new BinarySearchTree();

tree1.insert(15);
tree1.insert(20);
tree1.insert(30);
tree1.insert(45);

