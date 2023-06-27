const assert = require("assert");

var minWindow = function (s, t) {
  if (t === "") return "";
  const tCount = {};
  for (let c of t) tCount[c] = (tCount[c] || 0) + 1;
  let have = 0;
  let need = Object.keys(tCount).length;

  let resLen = Infinity;
  let res = [-1, -1];
  let window = {};
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    const c = s[right];
    window[c] = (window[c] || 0) + 1;

    if (tCount[c] && window[c] === tCount[c]) have++;

    while (need === have) {
      if (right - left + 1 < resLen) {
        res = [left, right];
        resLen = right - left + 1;
      }

      window[s[left]]--;

      if (tCount[s[left]] && window[s[left]] < tCount[s[left]]) have--;

      left++;
    }
  }
  [left, right] = res;
  return resLen === Infinity ? "" : s.substring(left, right + 1);
};

assert.equal(minWindow("ADOBECODEBANC", "ABC"), "BANC");
assert.equal(minWindow("a", "a"), "a");
assert.equal(minWindow("a", "aa"), "");
