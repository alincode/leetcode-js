const assert = require("assert");

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const visited = new Array(s.length).fill(false);

  function dfs(start, visited) {
    if (start === s.length) return true; // 所有字符都已拆分成單詞，返回 true
    if (visited[start]) return false; // 當前位置已訪問過，不再重複處理
    visited[start] = true;

    for (let end = start + 1; end <= s.length; end++) {
      const a = s.slice(start, end);
      console.count("count");
      console.log(a, start, end);
      if (wordDict.includes(s.slice(start, end)) && dfs(end, visited)) {
        return true; // 從當前位置拆分的單詞在 wordSet 中存在，繼續拆分剩餘的字符
      }
    }

    return false; // 無法拆分出符合條件的單詞
  }

  return dfs(0, visited);
};

assert.equal(wordBreak("leetcode", ["leet", "code"]), true);
assert.equal(wordBreak("applepenapple", ["apple", "pen"]), true);
assert.equal(
  wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]),
  false
);
