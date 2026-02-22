/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var maximumXor = function (s, t) {

    let ones = 0;
    let zeros = 0;

    let n = s.length;
    ones = t.toString(2).split('1').length - 1;

    zeros = n - ones;
    console.log(ones);
    console.log(zeros);

    let result = [];
    for (let ch of s) {
        if (ch == '0') {
            if (ones > 0) {

                result.push('1');
                ones--;
            } else {
                result.push('0');
                zeros--;
            }
        } else {
            if (zeros > 0) {

                result.push('1');
                zeros--;
            } else {
                result.push('0');
                ones--;
            }
        }
    }

    return result.join("");

};