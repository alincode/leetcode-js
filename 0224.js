const assert = require("assert");

var calculate = function (s) {
  const stack = [];
  let num = 0;
  let sign = 1; // 1 表示正數，-1 表示負數
  let res = 0;

  for (const char of s) {
    if (char >= "0" && char <= "9") {
      num = num * 10 + parseInt(char);
    } else if (char === "+") {
      res += sign * num;
      num = 0;
      sign = 1;
    } else if (char === "-") {
      res += sign * num;
      num = 0;
      sign = -1;
    } else if (char === "(") {
      stack.push(res);
      stack.push(sign);
      res = 0;
      sign = 1;
    } else if (char === ")") {
      res += sign * num;
      num = 0;
      res *= stack.pop(); // 取出括號前的符號
      res += stack.pop(); // 取出括號前的數字
    }
  }

  return res + sign * num;
};

assert.equal(calculate("1 + 1"), 2);
assert.equal(calculate(" 2-1 + 2 "), 3);
assert.equal(calculate("(1+(4+5+2)-3)+(6+8)"), 23);
