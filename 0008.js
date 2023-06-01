const assert = require("assert");

/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  const value = parseInt(s, 10);
  if (isNaN(value)) return 0;

  const max32BitInt = Math.pow(2, 31) - 1;
  const min32BitInt = -Math.pow(2, 31);

  if (value > max32BitInt) value = max32BitInt;
  if (value < min32BitInt) value = min32BitInt;

  return value;
};

assert.equal(myAtoi("42"), 42);
assert.equal(myAtoi("   -42"), -42);
assert.equal(myAtoi("4193 with words"), 4193);
assert.equal(myAtoi("words and 987"), 0);
