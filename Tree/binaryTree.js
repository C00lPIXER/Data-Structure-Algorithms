class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const root = new Node(1);
const value1 = new Node(2);
const value2 = new Node(3);
const value3 = new Node(4);
const value4 = new Node(5);

root.right = value1;
root.left = value2;

value1.left = value3;
value1.right = value4;

root;

function preOrder(node) {
  if (!node) return;

  console.log(node.value);

  preOrder(node.left);
  console.log(node.value);

  preOrder(node.right);
  console.log(node.value);
}

preOrder(root);
