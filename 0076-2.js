const assert = require("assert");

var minWindow = function (s, t) {
  const target = {};
  let count = t.length;
  let minLength = Infinity;
  let startIndex = 0;
  let left = 0;

  // 建立目標字典
  for (let char of t) target[char] = (target[char] || 0) + 1;

  // 遍歷字符串 S
  for (let right = 0; right < s.length; right++) {
    // 如果右指針指向的字符在目標字典中，減少計數器
    if (target[s[right]] > 0) count--;
    target[s[right]] = (target[s[right]] || 0) - 1;

    // 當窗口包含目標子串時，嘗試移動左指針以縮小窗口範圍
    while (count === 0) {
      // 更新最小覆蓋子串的起始索引和長度
      if (right - left + 1 < minLength) {
        minLength = right - left + 1;
        startIndex = left;
      }

      // 移動左指針並調整窗口內的字符出現次數
      target[s[left]]++;
      if (target[s[left]] > 0) count++;
      left++;
    }
  }

  // 如果找不到最小覆蓋子串，返回空字符串；否則返回最小覆蓋子串
  return minLength === Infinity ? "" : s.substr(startIndex, minLength);
};

assert.equal(minWindow("ADOBECODEBANC", "ABC"), "BANC");
assert.equal(minWindow("a", "a"), "a");
assert.equal(minWindow("a", "aa"), "");
