/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function(n) {
    

if((n.toString(2).split('1').length-2 ) ==0) return 0;

    let maxCount =1;

    let count =0;
    let res = n.toString(2);
    for(let i=1;i<res.length;i++)
    {
       
       count++;
       if(res[i] == '1')
       {
        maxCount = Math.max(maxCount, count);
        count =0
       }

    }

    return  maxCount;
};