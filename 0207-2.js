const assert = require("assert");

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
const canFinish = function (numCourses, prerequisites) {
  // Create prereq => course graph and indegree array (for topological sort)
  const g = new Array(numCourses).fill(null).map(() => []);
  const indegree = new Array(numCourses).fill(0); // [0,2,1,2]
  for (const prereq of prerequisites) {
    const [course, prereqCourse] = prereq;
    g[prereqCourse].push(course);
    indegree[course]++;
  }

  // Remove nodes until there's a cycle
  for (let _ = 0; _ < numCourses; _++) {
    const takenCourse = indegree.indexOf(0);
    if (takenCourse === -1) return false;

    indegree[takenCourse] = null;
    for (const neighbor of g[takenCourse]) indegree[neighbor]--;
  }

  return true;
};

// Topological Sort

assert.equal(canFinish(2, [[1, 0]]), true);
assert.equal(
  canFinish(2, [
    [1, 0],
    [0, 1],
  ]),
  false
);

assert.equal(
  canFinish(5, [
    [0, 1],
    [0, 2],
    [1, 3],
    [1, 4],
    [3, 4],
  ]),
  true
);
