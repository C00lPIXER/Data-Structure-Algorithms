//* Hash table

class HashTable {
  constructor(size) {
    this.table = [];
    this.size = size;
  }

  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }
  set(key, value) {
    const index = this.hash(key);
    this.table[index] = value;
  }

  get(key) {
    const index = this.hash(key);
    return this.table[index];
  }

  remove(key) {
    const index = this.hash(key);
    this.table[index] = undefined;
  }

  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i]);
      }
    }
  }
}

const hashTable = new HashTable(50);

hashTable.set("a", "apple");

hashTable.set("b", "ball");

hashTable.set("c", "cat");

hashTable.set("d", "dog");

console.log(hashTable.get("a"));
console.log(hashTable.get("b"));
console.log(hashTable.get("c"));
console.log(hashTable.get("d"));

hashTable.remove("a");

hashTable.set("b", "ball");

hashTable.set("c", "cat");

hashTable.set("d", "dog");

console.log(hashTable.get("a"));
console.log(hashTable.get("b"));
console.log(hashTable.get("c"));
console.log(hashTable.get("d"));

hashTable.display();

/* ***************************************************************************
 * Hash table Without Collision         */

class HashTable2 {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }

    return total % this.size;
  }

  set(key, value) {
    const index = this.hash(key);
    const bucket = this.table[index];

    if (!bucket) {
      this.table[index] = [[key, value]];
    } else {
      const sameKey = bucket.find((item) => item[0] === key);
      if (sameKey) {
        sameKey[1] = value;
      } else {
        bucket.push([key, value]);
      }
    }
  }

  get(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (bucket) {
      const sameKey = bucket.find((item) => item[0] === key);
      if (sameKey) {
        return sameKey[1];
      }
    }
    return undefined;
  }

  remove(key) {
    const index = this.hash(key);
    const bucket = this.table[index];

    if (bucket) {
      const keyIndex = bucket.findIndex((item) => item[0] === key);
      if (keyIndex !== -1) {
        bucket.splice(keyIndex, 1);
        if (bucket.length === 0) {
          this.table[index] = undefined;
        }
      }
    }
  }

  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i]);
      }
    }
  }
}

const hashTable1 = new HashTable2(50);

hashTable1.set("a", "apple");

hashTable1.set("b", "ball");

hashTable1.set("c", "cat");

hashTable1.set("d", "dog");


console.log(hashTable1.get("a"));
console.log(hashTable1.get("b"));
console.log(hashTable1.get("c"));
console.log(hashTable1.get("d"));

hashTable1.remove("a");

hashTable1.set("b", "ball");

hashTable1.set("c", "cat");

hashTable1.set("d", "dog");

console.log(hashTable1.get("a"));
console.log(hashTable1.get("b"));
console.log(hashTable1.get("c"));
console.log(hashTable1.get("d"));

hashTable1.display();
