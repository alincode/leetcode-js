const assert = require("assert");

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (!digits || digits.length === 0) return [];

  const digitToLetters = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };
  let result = [];

  function backtrack(i, currentStr) {
    if (currentStr.length === digits.length) {
      result.push(currentStr);
      return;
    }
    for (let c of digitToLetters[digits[i]]) {
      backtrack(i + 1, currentStr + c);
    }
  }
  backtrack(0, "");
  return result;
};

assert.deepEqual(letterCombinations("23"), [
  "ad",
  "ae",
  "af",
  "bd",
  "be",
  "bf",
  "cd",
  "ce",
  "cf",
]);

assert.deepEqual(letterCombinations("2"), ["a", "b", "c"]);
