const assert = require("assert");

var groupAnagrams = function (strs) {
  const groups = new Map();

  for (let str of strs) {
    const sortedStr = str.split("").sort().join("");
    if (!groups.has(sortedStr)) groups.set(sortedStr, []);
    groups.get(sortedStr).push(str);
  }

  return Array.from(groups.values());
};

assert.deepEqual(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]), [
  ["eat", "tea", "ate"],
  ["tan", "nat"],
  ["bat"],
]);
