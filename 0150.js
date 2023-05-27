const assert = require("assert");

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const operators = ["+", "-", "*", "/"];
  let stack = [];

  for (let token of tokens) {
    if (operators.includes(token)) {
      let n2 = stack.pop();
      let n1 = stack.pop();
      switch (token) {
        case "+":
          stack.push(n1 + n2);
          break;
        case "-":
          stack.push(n1 - n2);
          break;
        case "*":
          stack.push(n1 * n2);
          break;
        default:
          stack.push(Math.trunc(n1 / n2));
          break;
      }
    } else {
      stack.push(Number(token));
    }
  }
  return stack.pop();
};

// Time: O(n)
// Space: O(n)

assert.equal(evalRPN(["2", "1", "+", "3", "*"]), 9);
// Explanation: ((2 + 1) * 3) = 9
assert.equal(evalRPN(["4", "13", "5", "/", "+"]), 6);
// Explanation: (4 + (13 / 5)) = 6
assert.equal(
  evalRPN([
    "10",
    "6",
    "9",
    "3",
    "+",
    "-11",
    "*",
    "/",
    "*",
    "17",
    "+",
    "5",
    "+",
  ]),
  22
);
// Explanation: ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
