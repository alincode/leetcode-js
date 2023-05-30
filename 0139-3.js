const assert = require("assert");

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  function backtrack(start) {
    // 所有字符都已拆分成單詞，返回 true
    if (start === s.length) return true;
    for (let end = start + 1; end <= s.length; end++) {
      // 從當前位置拆分的單詞在 wordSet 中存在，繼續拆分剩餘的字符
      if (wordDict.includes(s.slice(start, end)) && backtrack(end)) return true;
    }
    // 無法拆分出符合條件的單詞
    return false;
  }

  return backtrack(0);
};

assert.equal(wordBreak("leetcode", ["leet", "code"]), true);
assert.equal(wordBreak("applepenapple", ["apple", "pen"]), true);
assert.equal(
  wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]),
  false
);

// Time Limit Exceeded
