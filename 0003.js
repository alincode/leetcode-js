var lengthOfLongestSubstring = function (s) {
  let maxLength = 0;
  let wordSet = new Set();

  for (let left = 0, right = 0; right < s.length; right++) {
    if (wordSet.has(s[right])) {
      let prevEndIdx = right - 1;
      maxLength = Math.max(prevEndIdx - left + 1, maxLength);

      // 視窗左邊界向右收縮，更新 set
      while (s[left] !== s[right]) wordSet.delete(s[left++]);
      left++; // 左邊界已指到重複字母的位置，往右再收縮一格
    } else {
      wordSet.add(s[right]);
    }
    if (right === s.length - 1)
      maxLength = Math.max(right - left + 1, maxLength);
  }

  return maxLength;
};
