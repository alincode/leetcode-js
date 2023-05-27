const assert = require("assert");

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let l = 0;
  let r = s.length - 1;

  while (l < r) {
    while (l < r && !isAlphanumeric(s[l])) l++;
    while (l < r && !isAlphanumeric(s[r])) r--;

    if (s[l].toLowerCase() !== s[r].toLowerCase()) return false;
    l++;
    r--;
  }
  return true;
};

function isAlphanumeric(s) {
  return /[a-zA-Z0-9]/gi.test(s);
}

// function isAlphanumeric(s) {
//   return (
//     ("a".charCodeAt() <= s.charCodeAt() &&
//       "z".charCodeAt() >= s.charCodeAt()) ||
//     ("A".charCodeAt() <= s.charCodeAt() &&
//       "Z".charCodeAt() >= s.charCodeAt()) ||
//     ("0".charCodeAt() <= s.charCodeAt() && "9".charCodeAt() >= s.charCodeAt())
//   );
// }

assert.equal(isPalindrome("A man, a plan, a canal: Panama"), true);
assert.equal(isPalindrome("race a car"), false);
assert.equal(isPalindrome(" "), true);
