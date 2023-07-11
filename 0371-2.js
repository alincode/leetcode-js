const assert = require("assert");

var getSum = function (a, b) {
  if (b === 0) return a;
  return getSum(a ^ b, (a & b) << 1);
};

assert.equal(getSum(1, 2), 3);
assert.equal(getSum(2, 3), 5);
