/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function (s) {
    let start0 =0;
    let start1 =0;
    for(let i=0;i<s.length;i++)
    {
        let expected0 = i%2 ==0 ? '0':'1';
          let expected1= i%2 ==0 ? '1':'0';

          if(s[i] != expected0) start0++;
          if(s[i] != expected1) start1++;

    }


return Math.min(start0, start1)
};