/**
 * @param {number[]} nums
 * @return {number}
 */
var scoreDifference = function(nums) {
    let firstScore =0;
    let secondScore =0;

    let firstActive = true;
    for(let i=0;i<nums.length;i++)
    {
        if(nums[i] %2 ==1)
        {
            firstActive = !firstActive;
        }

if(i %6 ==5)
{
    firstActive = !firstActive;
}
        if(firstActive)
        {
            firstScore += nums[i]
        }else{
            secondScore += nums[i]
        }
    }

    return firstScore - secondScore;
    
};