const assert = require("assert");
const UnionFind = require("./union-find");
const uf = new UnionFind();

uf.union("A", "B");
uf.union("B", "C");
uf.union("D", "E");

assert.equal(uf.find("A"), "C");
assert.equal(uf.find("B"), "C");
assert.equal(uf.find("C"), "C");
assert.equal(uf.find("D"), "E");
assert.equal(uf.find("E"), "E");
