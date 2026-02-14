/**
 * @param {string} s
 * @return {number}
 */
var longestBalanced = function (s) {


    function helper(s, ch1, ch2) {
        let n = s.length;
        let maxL = 0;

        let diff = new Map()
        diff.set(0, -1);

        let count1 = 0;
        let count2 = 0;

        for (let i = 0; i < n; i++) {
            if (s[i] !== ch1 && s[i] !== ch2) {

                diff.clear();
                count1 = 0;
                count2 = 0;

                continue;
            }

            if (s[i] == ch1) count1++;
            if (s[i] == ch2) count2++;


            if (count1 == count2) {
                maxL = Math.max(maxL, count1 + count2);
            }

            let str = count1 - count2;
            if (diff.has(str)) {
                maxL = Math.max(maxL, i - diff.get(str))
            } else {
                diff.set(str, i);
            }


        }

        return maxL;
    }

    let n = s.length;
    let maxL = 0;

    // Case1 : Single Char
    let count = 1;
    for (let i = 1; i < n; i++) {
        if (s[i] == s[i - 1]) {
            count++;
        } else {
            maxL = Math.max(maxL, count);
            count = 1
        }
    }


    // abcbbbb
    maxL = Math.max(maxL, count);


    // CASE 2: aabbac
    maxL = Math.max(maxL, helper(s, 'a', 'b'));
    maxL = Math.max(maxL, helper(s, 'a', 'c'));
    maxL = Math.max(maxL, helper(s, 'b', 'c'));



    // CASE:3 
    // Case 3: Balanced among 'a', 'b', 'c'
    let countA = 0;
    let countB = 0;
    let countC = 0;
    const diffMap = new Map();

    diffMap.set("0_0", -1);

    for (let i = 0; i < n; i++) {

        if (s[i] === 'a') countA++;
        if (s[i] === 'b') countB++;
        if (s[i] === 'c') countC++;

        if (countA === countB && countA === countC) {
            maxL = Math.max(maxL, countA + countB + countC);
        }

        const diffAB = countA - countB;
        const diffAC = countA - countC;

        const key = diffAB + "_" + diffAC;

        if (diffMap.has(key)) {
            maxL = Math.max(maxL, i - diffMap.get(key));
        } else {
            diffMap.set(key, i);
        }
    }

    return maxL;

};