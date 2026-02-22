function rotateElements(nums, k) {
  const pos = [];

  // collect non-negative elements
  for (let x of nums) {
    if (x >= 0) pos.push(x);
  }

  const j = pos.length;
  if (k === 0 || j === 0) return nums;

  k = k % j;

  // left rotate non-negative elements
  const rotated = pos.slice(k).concat(pos.slice(0, k));

  // put them back in original positions
  let idx = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= 0) {
      nums[i] = rotated[idx];
      idx++;
    }
  }

  return nums;
}
