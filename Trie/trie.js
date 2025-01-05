class Node {
  constructor() {
    this.children = {};
    this.isEndOfword = false;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(word) {
    let node = this.root;

    for (let char of word) {
      if (!node.children[char]) {
        node.children[char] = new Node();
      }
      node = node.children[char];
    }

    node.isEndOfword = true;
  }

  search(word) {
    let node = this.root;

    for (let char of word) {
      if (!node.children[char]) {
        return false;
      }
      node = node.children[char];
    }

    return node.isEndOfword;
  }

  searchWith(prefix) {
    let node = this.root;
    for (let char of prefix) {
      if (!node.children[char]) {
        return false;
      }
      node = node.children[char];
    }
    return node;
  }

  collectWords(node, prefix, result) {
    if (node.isEndOfword) {
      result.push(prefix);
    }
    for (const char in node.children) {
      this.collectWords(node.children[char], prefix + char, result);
    }
  }

  autoComplte(word) {
    let node = this.searchWith(word);
    const result = [];
    if (!node) return result;
    this.collectWords(node, word, result);
    return result;
  }

  removeWordHelper(node, word, depth) {
    if (!node) return false;
    if (word.length === depth) {
      if (!node.isEndOfword) {
        return false;
      }

      node.isEndOfword = false;

      return Object.keys(node.children).length === 0;
    }

    const char = word[depth];
    const shouldRemoveChild = this.removeWordHelper(
      node.children[char],
      word,
      depth + 1
    );

    if (shouldRemoveChild) {
      delete node.children[char];
    }

    return Object.keys(node.children).length === 0 && !node.isEndOfword;
  }

  remove(word) {
    this.removeWordHelper(this.root, word, 0);
  }
}

const trie = new Trie();

trie.insert("start");
trie.insert("shot");
trie.insert("show");
trie.insert("sharp");
trie.insert("hello world");

trie.remove("shot");

console.log(trie.search("shot"));
console.log(trie.searchWith("shot"));
console.log(trie.autoComplte("sho"));

console.log(trie);
