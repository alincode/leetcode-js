const assert = require("assert");

var ladderLength = function (beginWord, endWord, wordList) {
  const wordSet = new Set(wordList);
  if (!wordSet.has(endWord)) return 0;

  let beginSet = new Set([beginWord]);
  let endSet = new Set([endWord]);
  const visited = new Set();
  let level = 1;

  while (beginSet.size > 0 && endSet.size > 0) {
    if (beginSet.size > endSet.size) [beginSet, endSet] = [endSet, beginSet];

    const nextSet = new Set();

    for (let word of beginSet) {
      for (let i = 0; i < word.length; i++) {
        for (let j = 0; j < 26; j++) {
          const newWord =
            word.slice(0, i) + String.fromCharCode(97 + j) + word.slice(i + 1);
          if (endSet.has(newWord)) return level + 1;
          if (wordSet.has(newWord) && !visited.has(newWord)) {
            nextSet.add(newWord);
            visited.add(newWord);
          }
        }
      }
    }

    beginSet = nextSet;
    level++;
  }

  return 0;
};

assert.equal(
  ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]),
  5
);

assert.equal(
  ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log"]),
  0
);

assert.equal(
  ladderLength("ymain", "oecij", [
    "ymann",
    "yycrj",
    "oecij",
    "ymcnj",
    "yzcrj",
    "yycij",
    "xecij",
    "yecij",
    "ymanj",
    "yzcnj",
    "ymain",
  ]),
  10
);
