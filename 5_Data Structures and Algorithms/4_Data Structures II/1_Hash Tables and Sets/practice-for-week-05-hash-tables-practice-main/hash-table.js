const sha256 = require('js-sha256');

class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {

  constructor(numBuckets = 4) {
    // Your code here
    this.numBuckets = numBuckets
    this.count = 0
    this.capacity = numBuckets
    this.data = new Array(numBuckets).fill(null);
  }

  hash(key) {
    // Your code here
    return parseInt(sha256(key).substring(0, 8), 16);
  }

  hashMod(key) {
    // Your code here
    return this.hash(key) % this.numBuckets
  }

  insertNoCollisions(key, value) {
    // Your code here
    const index = this.hashMod(key);
    if(this.data[index] === null){
      this.data[index] = new KeyValuePair(key, value);
      this.count++;
    }else{
      throw new Error('hash collision or same key/value pair already exists!')
    }
  }

  insertWithHashCollisions(key, value) {
    // Your code here
    const index = this.hashMod(key);
    const pair = new KeyValuePair(key, value);
    
    if(this.data[index] === null){
      this.data[index] = pair;
    }else{
      const data = this.data[index];
      pair.next = data;
      this.data[index] = pair
    }
    this.count++;
  }

  insert(key, value) {
    // Your code here
    let index = this.hashMod(key)
    let existingPair = this.data[index];
    
    while (existingPair) {
      if (existingPair.key === key && existingPair.value !== value) {
        return existingPair.value = value;
      }
      existingPair = existingPair.next;
    }

    this.insertWithHashCollisions(key, value);
  }

}

const ht = new HashTable(2);
ht.insert("key-1", "val-1");
ht.insert("key-2", "val-2");
ht.insert("key-3", "val-3");
ht.insert("key-1", "val-100000");

// console.log(ht.count); // 2
// console.log(ht.capacity); // 2
// console.log(ht.data.length); // 2

// console.log(ht.data[0])
// console.log(ht.data[1])
// console.log(ht.data[0].next.key)


module.exports = HashTable;