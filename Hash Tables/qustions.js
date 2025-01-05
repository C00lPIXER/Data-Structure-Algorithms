/* _______________________________________________________________________________________________________________
 * 1. Implement a Hash Table
 * Write a custom hash table implementation from scratch.
 * _______________________________________________________________________________________________________________
 */

class HashTable {
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
    this.table[index] = value;
  }

  get(key) {
    const index = this.hash(key);
    if (this.table[index]) {
      return this.table[index];
    }

    return "no value found";
  }

  remove(key) {
    const index = this.hash(key);
    if (this.table[index]) {
      this.table[index] = undefined;
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

const hashTable = new HashTable(50);
hashTable.set("name", "Amal");
hashTable.set("kk", "Amal");
hashTable.display();
/* _______________________________________________________________________________________________________________
 * 2. Count Word Frequencies
 * Count the frequency of each word in a string using a hash table.
 * _______________________________________________________________________________________________________________
 */

function countFrequencies(str) {
  let obj = {};
  for (let s of str) {
    obj[s] = (obj[s] || 0) + 1;
  }
  return obj;
}

console.log(countFrequencies("amalkrishna"));

/* _______________________________________________________________________________________________________________
 * 3. Check for Anagrams
 * Use a hash table to determine if two strings are anagrams.
 * _______________________________________________________________________________________________________________
 */

function anagrams(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const charCount = {};

  for (let char of str1) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (let char of str2) {
    if (!charCount[char]) {
      return false;
    }
    charCount[char]--;
  }

  return true;
}

console.log(anagrams("listen", "silent"));
console.log(anagrams("hello", "world"));
console.log(anagrams("test", "sett"));

/* _______________________________________________________________________________________________________________
 * 4. Find First Non-Repeating Character
 * Use a hash table to find the first non-repeating character in a string.
 * _______________________________________________________________________________________________________________
 */

/* _______________________________________________________________________________________________________________
 * 5. Check for Duplicates in an Array
 * Use a hash table to determine if an array contains duplicate elements.
 * _______________________________________________________________________________________________________________
 */

/* _______________________________________________________________________________________________________________
 * 6. Group Elements by Frequency
 * Group array elements by their frequency using a hash table.
 * _______________________________________________________________________________________________________________
 */

/* _______________________________________________________________________________________________________________
 * 7. Implement a Phonebook
 * Store and retrieve contact details using a hash table.
 * _______________________________________________________________________________________________________________
 */

/* _______________________________________________________________________________________________________________
 * 8. Two-Sum Problem
 * Given an array and a target, find two numbers that add up to the target using a hash table.
 * _______________________________________________________________________________________________________________
 */

/* _______________________________________________________________________________________________________________
 * 9. Intersection of Two Arrays
 * Find the intersection of two arrays using hash tables.
 * _______________________________________________________________________________________________________________
 */

/* _______________________________________________________________________________________________________________
 * 10. Cache System
 * Implement a simple cache system using a hash table.
 * _______________________________________________________________________________________________________________
 */
