const assert = require("assert");
/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.cache = new Map();
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.cache.has(key)) {
    const value = this.cache.get(key);
    // 更新使用順序，刪除原位置，重新插入到最後
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }
  return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.cache.has(key)) {
    // 若 key 已存在於緩存中，先刪除原位置的鍵值對
    this.cache.delete(key);
  } else if (this.cache.size >= this.capacity) {
    // 若緩存已滿，刪除最近最少使用的鍵值對（即 Map 中第一個鍵值對）
    const firstKey = this.cache.keys().next().value;
    this.cache.delete(firstKey);
  }
  // 插入新的鍵值對到緩存中，放在最後
  this.cache.set(key, value);
};

const lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // cache is {1=1}
lRUCache.put(2, 2); // cache is {1=1, 2=2}
assert.equal(lRUCache.get(1), 1);
lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
assert.equal(lRUCache.get(2), -1);
lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
assert.equal(lRUCache.get(1), -1); // return -1 (not found)
assert.equal(lRUCache.get(3), 3);
assert.equal(lRUCache.get(4), 4);
