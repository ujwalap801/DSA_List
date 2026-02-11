/**
 * @param {number[]} nums
 * @return {number[]}
 */
var mergeAdjacent = function(nums) {
    let copy =[...nums];


   let stack =[];

   for(let num of copy)
   {
    while(stack.length >0 && stack[stack.length-1] == num)
    {
        num = num + stack.pop();
    }

    stack.push(num);
   }

   return stack;
    
};