const assert = require("assert");

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
  if (image[sr][sc] === color) return image;
  fill(image, sr, sc, image[sr][sc], color);
  return image;
};

var fill = function (image, sr, sc, color, newColor) {
  if (
    sr < 0 ||
    sc < 0 ||
    sr >= image.length ||
    sc >= image[0].length ||
    image[sr][sc] != color
  )
    return;

  image[sr][sc] = newColor;
  fill(image, sr - 1, sc, color, newColor);
  fill(image, sr + 1, sc, color, newColor);
  fill(image, sr, sc - 1, color, newColor);
  fill(image, sr, sc + 1, color, newColor);
};

assert.equal(
  floodFill(
    [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ],
    1,
    1,
    2
  ).toString,
  [
    [2, 2, 2],
    [2, 2, 0],
    [2, 0, 1],
  ].toString
);

assert.equal(
  floodFill(
    [
      [
        [0, 0, 0],
        [0, 0, 0],
      ],
    ],
    0,
    0,
    0
  ).toString,
  [
    [
      [0, 0, 0],
      [0, 0, 0],
    ],
  ].toString
);
