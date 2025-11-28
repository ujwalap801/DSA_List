var nextGreaterElement = function(nums1, nums2) {
    let stack = [];
    let map = {};

    // Traverse nums2 from right to left
    for (let i = nums2.length - 1; i >= 0; i--) {
        let num = nums2[i];

        // Pop elements smaller or equal
        while (stack.length > 0 && num >= stack[stack.length - 1] ) {
            stack.pop();
        }

        // If stack is empty → no greater element
        map[num] = stack.length === 0 ? -1 : stack[stack.length - 1];

        // Push this number
        stack.push(num);
    }

    let ans = [];
    for (let x of nums1) ans.push(map[x]);
    return ans;
};
