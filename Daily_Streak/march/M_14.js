/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getHappyString = function(n, k) {
     let result = [];

    function solve(curr) {
        if (curr.length === n) {
            result.push(curr);
            return;
        }

        for (let ch of ['a', 'b', 'c']) {
            if (curr.length > 0 && curr[curr.length - 1] === ch) {
                continue;
            }

            // Do
            curr += ch;

            // Explore
            solve(curr);

            // Undo
            curr = curr.slice(0, -1);
        }
    }

    solve("");

    if (result.length < k) return "";
    return result[k - 1];
};