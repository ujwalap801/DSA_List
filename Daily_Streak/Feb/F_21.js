/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasAllCodes = function(s, k) {
      if (s.length < k) return false;

        let uniqueSub = Math.pow(2,k);

        // or let uniqueSub = 1 << k; to find out 2 power of k
        console.log(uniqueSub)
        const seen = new Set();

        for (let i = k; i <= s.length; i++) {
            const sub = s.substring(i - k, i);

            if (!seen.has(sub)) {
                seen.add(sub);
                uniqueSub--;
            }

            if (uniqueSub === 0) return true;
        }

        return false;
    }
