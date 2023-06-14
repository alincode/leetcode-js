const assert = require("assert");

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const pCount = new Array(26).fill(0); // p字串的字母計數器
  const result = [];
  const firstCharCode = "a".charCodeAt();

  // 初始化p字串的字母計數器
  for (let c of p) pCount[c.charCodeAt() - firstCharCode]++;

  let left = 0; // 窗口左邊界索引
  let right = 0; // 窗口右邊界索引
  let count = p.length; // 窗口內剩餘需要匹配的字母數量

  // 滑動窗口
  while (right < s.length) {
    const charCode = s.charCodeAt(right) - firstCharCode;

    // 窗口右邊界字母計數減一
    pCount[charCode]--;

    // 如果窗口內的字母是p的一個異位詞，則更新count
    if (pCount[charCode] >= 0) count--;

    // 窗口大小超過p長度，移動左邊界
    if (right - left + 1 > p.length) {
      const leftCharCode = s.charCodeAt(left) - firstCharCode;

      // 窗口左邊界字母計數加一
      pCount[leftCharCode]++;

      // 如果加一後的計數大於零，表示需要重新匹配
      if (pCount[leftCharCode] > 0) count++;

      left++; // 移動左邊界
    }

    // 窗口內的字母完全匹配，添加起始索引到結果中
    if (count === 0) result.push(left);

    right++; // 移動右邊界
  }

  return result;
};

assert.deepEqual(findAnagrams("cbaebabacd", "abc"), [0, 6]);
assert.deepEqual(findAnagrams("abab", "ab"), [0, 1, 2]);
