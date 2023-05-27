const assert = require("assert");

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let ans = "";
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;

  while (i >= 0 || j >= 0) {
    let sum = (a[i] === "1" ? 1 : 0) + (b[j] === "1" ? 1 : 0) + carry;
    carry = sum >= 2 ? 1 : 0;
    ans = (sum % 2) + ans;
    i--;
    j--;
  }

  if (carry) ans = carry + ans;
  return ans;
};

assert.equal(addBinary("11", "1"), "100");
assert.equal(addBinary("10", "1"), "11");
assert.equal(addBinary("1010", "1011"), "10101");
