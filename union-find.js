class UnionFind {
  constructor() {
    this.parent = new Map();
  }

  find(x) {
    if (!this.parent.has(x)) {
      this.parent.set(x, x);
    } else if (this.parent.get(x) !== x) {
      this.parent.set(x, this.find(this.parent.get(x)));
    }
    return this.parent.get(x);
  }

  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);
    if (rootX !== rootY) {
      this.parent.set(rootX, rootY);
    }
  }
}

const uf = new UnionFind();

uf.union("A", "B");
uf.union("B", "C");
uf.union("D", "E");

console.log(uf.find("A")); // 'C'
console.log(uf.find("B")); // 'C'
console.log(uf.find("C")); // 'C'
console.log(uf.find("D")); // 'E'
console.log(uf.find("E")); // 'E'
