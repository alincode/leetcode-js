const assert = require("assert");

var getSum = function (a, b) {
  while (b !== 0) {
    let carry = a & b; // 計算進位
    a = a ^ b; // 計算非進位和
    b = carry << 1; // 左移進位
  }
  return a;
};

assert.equal(getSum(1, 2), 3);
assert.equal(getSum(2, 3), 5);
