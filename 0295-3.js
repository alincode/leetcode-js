const assert = require("assert");

var MedianFinder = function () {
  this.nums = []; // 存儲數字的陣列
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  // 使用二分搜尋找到合適的位置插入新數字，保持陣列有序
  let left = 0;
  let right = this.nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (this.nums[mid] < num) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  this.nums.splice(left, 0, num); // 在合適位置插入新數字
  // 時間複雜度為 O(n)
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  const n = this.nums.length;
  if (n % 2 === 0) {
    // 數字個數為偶數，取中間兩個數字的平均值
    const mid = n / 2;
    return (this.nums[mid - 1] + this.nums[mid]) / 2;
  } else {
    // 數字個數為奇數，直接返回中間的數字
    return this.nums[Math.floor(n / 2)];
  }
  // 時間複雜度為 O(n log n)
  // 空間複雜度為 O(n)
};

var obj = new MedianFinder();
obj.addNum(1);
obj.addNum(2);
assert.equal(obj.findMedian(), 1.5);
obj.addNum(3);
assert.equal(obj.findMedian(), 2);
