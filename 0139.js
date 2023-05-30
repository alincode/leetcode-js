const assert = require("assert");

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  // 創建一個陣列，用於記錄字符串 s 從索引 0 到當前索引 i 是否可以被拆分成 wordDict 中的單詞
  const dp = new Array(s.length + 1).fill(false);
  dp[0] = true; // 空字符串可以被拆分成空單詞

  // 遍歷字符串 s 的每個字符
  for (let i = 1; i <= s.length; i++) {
    // 對於每個索引 j，如果 dp[j] 為 true，且 s.slice(j, i) 在 wordSet 中存在，則表示 s.slice(0, i) 可以被拆分成 wordDict 中的單詞
    for (let j = 0; j < i; j++) {
      if (dp[j] && wordDict.includes(s.slice(j, i))) {
        dp[i] = true; // 如果前 j 個字符可以被拆分成單詞，且 s[j:i] 在 wordSet 中，則前 i 個字符也可以被拆分
        break;
      }
    }
  }

  return dp[s.length];
};

// var wordBreak = function (s, wordDict) {
//   const n = s.length;
//   const dp = new Array(n + 1).fill(false);
//   dp[n] = true;

//   const wordSet = new Set(wordDict);

//   for (let i = n - 1; i >= 0; i--) {
//     for (let j = i; j < n; j++) {
//       const word = s.substring(i, j + 1);
//       if (wordSet.has(word) && dp[j + 1]) {
//         dp[i] = true;
//         break;
//       }
//     }
//   }

//   return dp[0];
// };

assert.equal(wordBreak("leetcode", ["leet", "code"]), true);
// assert.equal(wordBreak("applepenapple", ["apple", "pen"]), true);
// assert.equal(
//   wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]),
//   false
// );
