/**
 * @param {string} s
 * @return {number}
 */
var numSteps = function(s) {

    
    // let n = parseInt(s, 2);
    // let count = 0;

    // while (n > 1) {
    //     count++;

    //     if (n % 2 === 0) {
    //         n = Math.floor(n / 2);
    //     } else {
    //         n = n + 1;
    //     }
    // }

    // return count;


      let steps = 0;
    let arr = s.split('');

    while (!(arr.length === 1 && arr[0] === '1')) {
        steps++;

        if (arr[arr.length - 1] === '0') {
            // even → divide by 2 (remove last bit)
            arr.pop();
        } else {
            // odd → add 1
            let i = arr.length - 1;

            while (i >= 0 && arr[i] === '1') {
                arr[i] = '0';
                i--;
            }

            if (i >= 0) {
                arr[i] = '1';
            } else {
                arr.unshift('1');
            }
        }
    }

    return steps;
};
