const assert = require("assert");

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const slen = s.length;
  const plen = p.length;
  if (plen > slen) return [];

  let sCount = new Array(26).fill(0);
  let pCount = new Array(26).fill(0);
  const firstCharCode = "a".charCodeAt();

  // 初始化p的計數器數組
  for (let c of p) pCount[c.charCodeAt() - firstCharCode]++;

  let result = [];

  // 遍歷s中的每個字符
  for (let i = 0; i < slen; i++) {
    // 將字符加入滑動窗口
    sCount[s.charCodeAt(i) - firstCharCode]++;
    // 窗口大小超過p的長度，移除窗口最左邊字符
    if (i >= plen) sCount[s.charCodeAt(i - plen) - firstCharCode]--;
    // 比較滑動窗口的計數器數組和p的計數器數組
    if (isEqual(sCount, pCount)) result.push(i - plen + 1);
  }

  return result;
};

// 比較兩個計數器數組是否相等
function isEqual(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

assert.deepEqual(findAnagrams("cbaebabacd", "abc"), [0, 6]);
assert.deepEqual(findAnagrams("abab", "ab"), [0, 1, 2]);
