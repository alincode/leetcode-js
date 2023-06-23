const assert = require("assert");

var groupAnagrams = function (strs) {
  const groups = new Map();

  for (let str of strs) {
    const count = new Array(26).fill(0);
    for (let char of str) {
      const index = char.charCodeAt() - "a".charCodeAt();
      count[index]++;
    }
    const key = count.join("#");

    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(str);
  }

  return Array.from(groups.values());
};

assert.deepEqual(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]), [
  ["eat", "tea", "ate"],
  ["tan", "nat"],
  ["bat"],
]);
