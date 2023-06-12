const assert = require("assert");

/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = function (digits) {
  if (digits.length === 0) {
    return [];
  }

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

  const result = [];

  const backtrack = function (combination, nextDigits) {
    if (nextDigits.length === 0) {
      result.push(combination);
      return;
    }

    const letters = digitToLetters[nextDigits[0]];
    for (let i = 0; i < letters.length; i++) {
      backtrack(combination + letters[i], nextDigits.slice(1));
    }
  };

  backtrack("", digits);
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
