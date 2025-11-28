let arr =[1, 3, 4, 2]

function nextSmallerElementRight(arr)
{
    let n = arr.length;
    let stack =[];
    let ans =new Array(n).fill(-1);
    for(let i=arr.length-1; i>=0 ;i--)
    {
        while(stack.length >0 && arr[i] <= stack[stack.length-1])
        {
            stack.pop();
        }
        
        if(stack.length >0)
        {
            ans[i] = stack[stack.length-1];
        }
        
        stack.push(arr[i]);
    }
    
    return ans;
}

console.log(nextSmallerElementRight(arr));