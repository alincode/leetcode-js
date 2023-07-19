const assert = require("assert");

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  let res = 0;
  let bitPos = 31; // 32位元，從最高位元開始放入反轉後的結果中

  while (n !== 0) {
    let bit = n & 1; // 取得 n 最右邊的位元值
    res = res | (bit << bitPos); // 將這個位元值放入反轉後的結果中
    n = n >>> 1; // 將 n 右移一位，繼續處理下一個位元
    bitPos--; // 將 bitPos 減1，以處理下一個位置
  }

  return res >>> 0;
};

assert.equal(reverseBits(43261596), 964176192);
assert.equal(reverseBits(4294967293), 3221225471);
