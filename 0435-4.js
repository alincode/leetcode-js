const assert = require("assert");

var eraseOverlapIntervals = function (intervals) {
  if (intervals.length === 0) return 0;

  intervals.sort((a, b) => a[0] - b[0]);

  let prevEnd = intervals[0][1];
  let count = 0;

  for (let i = 1; i < intervals.length; i++) {
    let start = intervals[i][0];
    let end = intervals[i][1];

    if (start >= prevEnd) {
      prevEnd = end;
    } else {
      count++;
      prevEnd = Math.min(end, prevEnd);
    }
  }

  return count;
};

assert.equal(
  eraseOverlapIntervals([
    [1, 2],
    [2, 3],
    [3, 4],
    [1, 3],
  ]),
  1
);

assert.equal(
  eraseOverlapIntervals([
    [1, 2],
    [1, 2],
    [1, 2],
  ]),
  2
);

assert.equal(
  eraseOverlapIntervals([
    [1, 2],
    [2, 3],
  ]),
  0
);
