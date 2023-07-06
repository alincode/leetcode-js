const assert = require("assert");

var ladderLength = function (beginWord, endWord, wordList) {
  // Step 1: 將 beginWord 加入 wordList
  wordList.push(beginWord);

  // Step 2: 初始化佇列，加入 beginWord 和初始步數 1
  const queue = [[beginWord, 1]];

  // Step 3: 初始化已訪問的集合
  const visited = new Set([beginWord]);

  while (queue.length) {
    const [word, step] = queue.shift();

    // Step 4: 遍歷 word 的每個字母進行替換
    for (let i = 0; i < word.length; i++) {
      for (let j = 97; j <= 122; j++) {
        const newWord =
          word.slice(0, i) + String.fromCharCode(j) + word.slice(i + 1);
        // 如果 newWord 在 wordList 中且未被訪問過
        if (wordList.includes(newWord) && !visited.has(newWord)) {
          if (newWord === endWord) return step + 1; // 找到 endWord，返回步數
          queue.push([newWord, step + 1]); // 將 newWord 加入佇列
          visited.add(newWord); // 標記 newWord 為已訪問
        }
      }
    }
  }

  return 0; // 無法從 beginWord 到達 endWord
};

assert.equal(
  ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]),
  5
);

assert.equal(
  ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log"]),
  0
);
