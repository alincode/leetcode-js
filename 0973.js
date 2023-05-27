const assert = require("assert");

/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
  if (k === points.length) return points;
  let map = [];
  let ans = [];
  for (let point of points) {
    map.push({ distance: dist(point), point });
  }

  map.sort((a, b) => a.distance - b.distance);

  for (let i = 0; i < k; i++) {
    ans.push(map[i].point);
  }

  return ans;
};

const dist = (point) => {
  return point[0] * point[0] + point[1] * point[1];
};

assert.deepEqual(
  kClosest(
    [
      [1, 3],
      [-2, 2],
    ],
    1
  ),
  [[-2, 2]]
);

assert.deepEqual(
  kClosest(
    [
      [3, 3],
      [5, -1],
      [-2, 4],
    ],
    2
  ),
  [
    [3, 3],
    [-2, 4],
  ]
);
