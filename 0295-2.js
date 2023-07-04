const assert = require("assert");

var MedianFinder = function () {
  this.maxHeap = new MaxHeap(); // 存放較小一半數字的最大堆
  this.minHeap = new MinHeap(); // 存放較大一半數字的最小堆
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  this.maxHeap.insert(num); // 先將數字插入最大堆

  // 將最大堆的最大值取出，插入最小堆
  this.minHeap.insert(this.maxHeap.extractMax());

  // 如果最小堆的大小超過最大堆，則將最小堆的最小值取出，插入最大堆
  if (this.minHeap.size() > this.maxHeap.size()) {
    this.maxHeap.insert(this.minHeap.extractMin());
  }
  // 時間複雜度為 O(log n)
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  const maxHeapSize = this.maxHeap.size();
  const minHeapSize = this.minHeap.size();

  if (maxHeapSize === minHeapSize) {
    // 兩個堆的大小相同，取兩個堆頂的平均值
    return (this.maxHeap.findMax() + this.minHeap.findMin()) / 2;
  } else {
    // 兩個堆的大小不同，直接返回最大堆的堆頂元素
    return this.maxHeap.findMax();
  }
  // 時間複雜度為 O(log n)
  // 空間複雜度為 O(n)（需要使用兩個堆來存儲數字）
};

/**
 * MaxHeap 類別
 */
class MaxHeap {
  constructor() {
    this.heap = [];
  }

  insert(num) {
    this.heap.push(num);
    this.heapifyUp(this.heap.length - 1);
  }

  extractMax() {
    const max = this.heap[0];
    const last = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = last;
      this.heapifyDown(0);
    }
    return max;
  }

  findMax() {
    return this.heap[0];
  }

  size() {
    return this.heap.length;
  }

  heapifyUp(index) {
    const parentIndex = Math.floor((index - 1) / 2);
    if (index > 0 && this.heap[index] > this.heap[parentIndex]) {
      [this.heap[index], this.heap[parentIndex]] = [
        this.heap[parentIndex],
        this.heap[index],
      ];
      this.heapifyUp(parentIndex);
    }
  }

  heapifyDown(index) {
    const leftChildIndex = 2 * index + 1;
    const rightChildIndex = 2 * index + 2;
    let largestIndex = index;

    if (
      leftChildIndex < this.heap.length &&
      this.heap[leftChildIndex] > this.heap[largestIndex]
    ) {
      largestIndex = leftChildIndex;
    }

    if (
      rightChildIndex < this.heap.length &&
      this.heap[rightChildIndex] > this.heap[largestIndex]
    ) {
      largestIndex = rightChildIndex;
    }

    if (largestIndex !== index) {
      [this.heap[index], this.heap[largestIndex]] = [
        this.heap[largestIndex],
        this.heap[index],
      ];
      this.heapifyDown(largestIndex);
    }
  }
}

/**
 * MinHeap 類別
 */
class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(num) {
    this.heap.push(num);
    this.heapifyUp(this.heap.length - 1);
  }

  extractMin() {
    const min = this.heap[0];
    const last = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = last;
      this.heapifyDown(0);
    }
    return min;
  }

  findMin() {
    return this.heap[0];
  }

  size() {
    return this.heap.length;
  }

  heapifyUp(index) {
    const parentIndex = Math.floor((index - 1) / 2);
    if (index > 0 && this.heap[index] < this.heap[parentIndex]) {
      [this.heap[index], this.heap[parentIndex]] = [
        this.heap[parentIndex],
        this.heap[index],
      ];
      this.heapifyUp(parentIndex);
    }
  }

  heapifyDown(index) {
    const leftChildIndex = 2 * index + 1;
    const rightChildIndex = 2 * index + 2;
    let smallestIndex = index;

    if (
      leftChildIndex < this.heap.length &&
      this.heap[leftChildIndex] < this.heap[smallestIndex]
    ) {
      smallestIndex = leftChildIndex;
    }

    if (
      rightChildIndex < this.heap.length &&
      this.heap[rightChildIndex] < this.heap[smallestIndex]
    ) {
      smallestIndex = rightChildIndex;
    }

    if (smallestIndex !== index) {
      [this.heap[index], this.heap[smallestIndex]] = [
        this.heap[smallestIndex],
        this.heap[index],
      ];
      this.heapifyDown(smallestIndex);
    }
  }
}

var obj = new MedianFinder();
obj.addNum(1);
obj.addNum(2);
assert.equal(obj.findMedian(), 1.5);
obj.addNum(3);
assert.equal(obj.findMedian(), 2);
