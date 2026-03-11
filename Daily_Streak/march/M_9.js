/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function(nums) {

   let set = new Set(nums)
    let n = nums.length;
    for(let i=0;i<Math.pow(2,n);i++)
    {
        let bin = i.toString(2).padStart(n,0);
     if(!set.has(bin))
     {
        return bin;
     }
    }

    
};