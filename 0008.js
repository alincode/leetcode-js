const assert = require("assert");

/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  const value = parseInt(s, 10);
  if (isNaN(value)) return 0;

  const limitUp = Math.pow(2, 31);
  const limitDown = Math.pow(-2, 31);

  if (value >= limitUp) {
    return limitUp - 1;
  } else if (value <= limitDown) {
    return limitDown;
  } else {
    return value;
  }
};

assert.equal(myAtoi("42"), 42);
assert.equal(myAtoi("   -42"), -42);
assert.equal(myAtoi("4193 with words"), 4193);
assert.equal(myAtoi("words and 987"), 0);
