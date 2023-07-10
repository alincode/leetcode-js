const assert = require("assert");

var countSubstrings = function (s) {
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    // odd palindrome
    let l = i;
    let r = i;

    while (l > -1 && r < s.length && s.charAt(l) === s.charAt(r)) {
      result++;

      l--;
      r++;
    }

    // even palindrome
    l = i;
    r = i + 1;

    while (l > -1 && r < s.length && s.charAt(l) === s.charAt(r)) {
      result++;

      l--;
      r++;
    }
  }

  return result;
};

// 時間複雜度為 O(n^2)
// 空間複雜度為 O(1)

assert.equal(countSubstrings("abc"), 3);
assert.equal(countSubstrings("aaa"), 6);
