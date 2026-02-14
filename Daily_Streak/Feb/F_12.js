/**
 * @param {string} s
 * @return {number}
 */
var longestBalanced = function(s) {

    let n = s.length;
    let maxL =0;

    function checkBal(freq)
    {
 let common =0;

 for(let f of freq)
 {
    if(f ==0) continue;

    if(common ==0)
    {
        common =f;
    }else if(f !== common){
        return false;

    }
 }

 return true;
    }

    for(let i=0;i<n;i++)
    {

        let freq = new Array(26).fill(0)
        for(let j=i; j<n;j++)
        {
            freq[s.charCodeAt(j) - 97]++;
            if(checkBal(freq))
            {
                maxL = Math.max(maxL, j-i+1);
            }
        }
    }

    return maxL;
    
};