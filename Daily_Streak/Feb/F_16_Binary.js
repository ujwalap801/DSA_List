/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {

       let m = a.length - 1;
    let n = b.length - 1;

    let result = [];
    let carry = 0;

    while (m >= 0 || n >= 0) {
        let sum = carry;

        if (m >= 0) {
            sum += a[m] - '0';
            m--;
        }

        if (n >= 0) {
            sum += b[n] - '0';
            n--;
        }

        result.push(sum % 2 === 0 ? '0' : '1');
        carry = sum > 1 ? 1 : 0; // Math.floor(sum / 2)
    }

    if (carry) {
        result.push('1');
    }

    return result.reverse().join('');
    
};