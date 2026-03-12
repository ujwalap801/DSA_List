function printNum(n, arr) {
  let map = new Map();

  for (let i = 0; i < arr.length; i++) {
    if (!map.has(arr[i])) {
      map.set(arr[i], 1);
    } else {
      map.set(arr[i], map.get(arr[i]) + 1);
    }
  }

  const newMap = new Map(
    [...map.entries()].filter(([key, value]) => value % 2 == 0),
  );
  return newMap.keys();
}

console.log(printNum(5, [1, 2, 2, 1, 1]));
