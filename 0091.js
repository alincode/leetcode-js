const assert = require("assert");

var numDecodings = function (s) {
  if (s[0] === "0") return 0;

  const n = s.length;
  const dp = Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    const oneDigit = Number(s.slice(i - 1, i));
    const twoDigits = Number(s.slice(i - 2, i));

    if (oneDigit > 0 && oneDigit <= 9) {
      dp[i] += dp[i - 1];
    }

    if (twoDigits >= 10 && twoDigits <= 26) {
      dp[i] += dp[i - 2];
    }
  }

  return dp[n];
};

assert.equal(numDecodings("12"), 2);
assert.equal(numDecodings("226"), 3);
assert.equal(numDecodings("06"), 0);
