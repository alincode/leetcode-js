const assert = require("assert");

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  // 建立一個用來計算元素頻率的哈希表。
  const freqMap = new Map();
  for (const num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  // 根據頻率對哈希表進行排序。
  const sortedFreqMap = Array.from(freqMap.entries()).sort(
    (a, b) => b[1] - a[1]
  );

  // 返回前 k 個元素。
  const result = sortedFreqMap.slice(0, k).map(([num, count]) => num);
  return result;
};

assert.deepEqual(topKFrequent([1, 1, 1, 2, 2, 3], 2), [1, 2]);
assert.deepEqual(topKFrequent([1], 1), [1]);
assert.deepEqual(topKFrequent([1, 1, 1, 2, 2, 2, 2, 3], 2), [2, 1]);
