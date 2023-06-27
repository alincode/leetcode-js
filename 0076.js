const assert = require("assert");

var minWindow = function (s, t) {
  // 使用字典來記錄字符串 T 中每個字符的出現次數
  const target = {};
  for (let char of t) target[char] = (target[char] || 0) + 1;

  let left = 0; // 左指針
  let right = 0; // 右指針
  let count = Object.keys(target).length; // 字符出現次數的計數器
  let minLength = Infinity; // 最小覆蓋子串的長度
  let startIndex = 0; // 最小覆蓋子串的起始索引
  let window = {}; // 窗口中字符的出現次數

  // 遍歷字符串 S，移動右指針
  while (right < s.length) {
    const char = s[right];

    // 更新窗口中字符的出現次數
    window[char] = (window[char] || 0) + 1;

    // 如果當前字符在目標字典中並且窗口中出現次數與目標次數相等，則減少計數器的值
    if (target[char] && window[char] === target[char]) count--;

    // 當窗口包含了目標子串時，嘗試移動左指針以縮小窗口範圍
    while (count === 0) {
      const currentLength = right - left + 1;

      // 更新最小覆蓋子串的起始索引和長度
      if (currentLength < minLength) {
        minLength = currentLength;
        startIndex = left;
      }

      const leftChar = s[left];

      // 減少窗口中字符的出現次數
      window[leftChar]--;

      // 如果窗口中某個字符的出現次數小於目標次數，增加計數器的值
      if (target[leftChar] && window[leftChar] < target[leftChar]) count++;

      left++; // 移動左指針
    }

    right++; // 移動右指針
  }

  // 如果找不到最小覆蓋子串，返回空字符串；否則返回最小覆蓋子串
  return minLength === Infinity ? "" : s.substr(startIndex, minLength);
};

assert.equal(minWindow("ADOBECODEBANC", "ABC"), "BANC");
assert.equal(minWindow("a", "a"), "a");
assert.equal(minWindow("a", "aa"), "");
