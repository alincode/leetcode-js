const assert = require("assert");

/**
 * @param {string} s - 字符串 s
 * @param {string} p - 字符串 p
 * @return {number[]} - 返回符合異位詞的起始索引
 */
var findAnagrams = function (s, p) {
  const map = new Array(26).fill(0);
  const firstCharCode = "a".charCodeAt();

  // 統計字符串 p 中各字符出現次數
  for (let char of p) map[char.charCodeAt(0) - firstCharCode]++;

  const res = [];
  let left = 0;

  // 遍歷字符串 s
  for (let right = 0; right < s.length; right++) {
    // 當前字符轉換成數字的索引
    const sChar = s.charCodeAt(right) - firstCharCode;
    // 將當前字符出現次數減一
    map[sChar]--;

    // 當出現某字符次數小於 0 時，表示該字符超出了異位詞的要求，需要移動左指針
    while (map[sChar] < 0) {
      // 將左指針指向的字符出現次數加一，並將左指針右移
      map[s[left++].charCodeAt(0) - firstCharCode]++;
    }

    // 當窗口大小與字符串 p 長度相等時，表示找到了一個符合要求的異位詞，將左指針加入結果陣列
    if (right - left + 1 === p.length) res.push(left);
  }

  return res;
};

assert.deepEqual(findAnagrams("cbaebabacd", "abc"), [0, 6]);
assert.deepEqual(findAnagrams("abab", "ab"), [0, 1, 2]);
