var TimeMap = function () {
  // 創建一個 Map 來存儲鍵值對
  this.map = new Map();
};

/**
 * @param {string} key
 * @param {string} value
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function (key, value, timestamp) {
  // 如果鍵不存在，創建一個新的數組來存儲值和時間戳
  if (!this.map.has(key)) {
    this.map.set(key, []);
  }
  // 將值和時間戳添加到對應的數組中
  this.map.get(key).push({ value, timestamp });
};

/**
 * @param {string} key
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function (key, timestamp) {
  // 如果鍵不存在，返回空字符串
  if (!this.map.has(key)) {
    return "";
  }
  // 獲取鍵對應的值和時間戳數組
  const values = this.map.get(key);
  // 二分搜索找到小於等於給定時間戳的最大時間戳對應的值
  let left = 0;
  let right = values.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (values[mid].timestamp <= timestamp) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  // 如果找到了合適的時間戳對應的值，返回該值
  if (right >= 0) {
    return values[right].value;
  }
  // 如果沒有找到合適的值，返回空字符串
  return "";
};

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
