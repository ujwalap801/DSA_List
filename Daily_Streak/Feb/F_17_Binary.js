/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function (n) {

    let bin = n.toString(2);

    console.log(bin)
    for (let i = 1; i < bin.length; i++) {
        if (bin[i] == bin[i - 1]) {

            return false;
        }
    }

    return true;
};