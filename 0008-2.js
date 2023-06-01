const assert = require("assert");

/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  let value = s.trimStart();
  let sign = 1;
  const firstWord = value.charAt(0);
  let index = 0;

  if (firstWord === "+" || firstWord === "-") {
    if (firstWord === "-") {
      sign = -1;
    }
    index = 1;
  }

  const zero = "0".charCodeAt(0);
  const nine = "9".charCodeAt(0);

  let result = "0";
  for (let i = index; i < value.length; i++) {
    const char = value[i];
    const code = char.charCodeAt(0);
    if (code > nine || code < zero) break;
    result = result === "0" ? char : result + char;
  }

  result = result * sign;

  const maxLimit = Math.pow(2, 31) - 1;
  const minLimit = -Math.pow(2, 31);

  if (result > maxLimit) result = maxLimit;
  if (result < minLimit) result = minLimit;

  return result;
};

// assert.equal(myAtoi("42"), 42);
// assert.equal(myAtoi("   -42"), -42);
// assert.equal(myAtoi("4193 with words"), 4193);
// assert.equal(myAtoi("words and 987"), 0);
assert.equal(myAtoi("0042"), 42);
