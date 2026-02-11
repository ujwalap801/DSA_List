function countSubarrays(nums, k) {
    const n = nums.length;
    const maxDeque = []; // stores indices (decreasing values)
    const minDeque = []; // stores indices (increasing values)

    let left = 0;
    let result = 0;

    for (let right = 0; right < n; right++) {
        // Maintain max deque (monotonic decreasing)
        while (maxDeque.length && nums[maxDeque[maxDeque.length - 1]] <= nums[right]) {
            maxDeque.pop();
        }
        maxDeque.push(right);

        // Maintain min deque (monotonic increasing)
        while (minDeque.length && nums[minDeque[minDeque.length - 1]] >= nums[right]) {
            minDeque.pop();
        }
        minDeque.push(right);

        // Shrink window if cost > k
        while (
            maxDeque.length &&
            minDeque.length &&
            (nums[maxDeque[0]] - nums[minDeque[0]]) * (right - left + 1) > k
        ) {
            if (maxDeque[0] === left) maxDeque.shift();
            if (minDeque[0] === left) minDeque.shift();
            left++;
        }

        // Count valid subarrays ending at right
        result += (right - left + 1);
    }

    return result;
}


// only one test is failing for above code

function countSubarrays(nums, k) {
    const n = nums.length;

    const maxDeque = [];
    const minDeque = [];

    let maxHead = 0;
    let minHead = 0;

    let left = 0;
    let result = 0;

    for (let right = 0; right < n; right++) {

        // Maintain decreasing max deque
        while (maxDeque.length > maxHead &&
               nums[maxDeque[maxDeque.length - 1]] <= nums[right]) {
            maxDeque.pop();
        }
        maxDeque.push(right);

        // Maintain increasing min deque
        while (minDeque.length > minHead &&
               nums[minDeque[minDeque.length - 1]] >= nums[right]) {
            minDeque.pop();
        }
        minDeque.push(right);

        // Shrink window
        while (
            nums[maxDeque[maxHead]] - nums[minDeque[minHead]] >
            Math.floor(k / (right - left + 1))
        ) {
            if (maxDeque[maxHead] === left) maxHead++;
            if (minDeque[minHead] === left) minHead++;
            left++;
        }

        result += (right - left + 1);
    }

    return result;
}



