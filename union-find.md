# UnionFind

要使用 `UnionFind` 類別，你可以按照以下步驟進行：

1. 創建 `UnionFind` 實例：

   ```javascript
   const uf = new UnionFind();
   ```

2. 使用 `union` 方法將元素合併：

   ```javascript
   uf.union(element1, element2);
   ```

   此方法會將 `element1` 和 `element2` 所在的集合合併成一個集合。

3. 使用 `find` 方法查找元素所屬的集合：

   ```javascript
   const root = uf.find(element);
   ```

   此方法會返回 `element` 所屬的集合的根節點。

下面是一個簡單的示例，展示如何使用 `UnionFind` 類別：

```javascript
const uf = new UnionFind();

uf.union("A", "B");
uf.union("B", "C");
uf.union("D", "E");

console.log(uf.find("A")); // 'C'
console.log(uf.find("B")); // 'C'
console.log(uf.find("C")); // 'C'
console.log(uf.find("D")); // 'E'
console.log(uf.find("E")); // 'E'
```

在此示例中，我們創建了一個 `UnionFind` 實例 `uf`，然後使用 `union` 方法將 'A'、'B' 和 'C' 這三個元素合併成一個集合，並將 'D' 和 'E' 合併成另一個集合。最後，使用 `find` 方法查找元素所屬的集合，並輸出結果。

請注意，`UnionFind` 類別使用了「路徑壓縮」的優化技巧，即在 `find` 方法中，將元素的父節點設置為根節點，以減少後續查找的時間。
