class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(child) {
    this.children.push(child);
  }
}

const tree = new Node("root");
const child1 = new Node("child 1");
const child2 = new Node("child 2");

tree.addChild(child1);
tree.addChild(child2);

const grandChild1 = new Node("grandChild 1");
const grandChild2 = new Node("grandChild 2");

child1.addChild(grandChild1);
child1.addChild(grandChild2);

tree;

function traverse(node) {
  if (!node) return;

  console.log(node.value);

  for(let child of node.children){
    traverse(child)
  }
}

traverse(tree)