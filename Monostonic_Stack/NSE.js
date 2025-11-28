let arr = [4, 2, 5, 1,3];
let result = new Array(arr.length).fill(-1);
// console.log(result)

let result1 = new Array(arr.length).fill(-1);
let stack1 =[]
let stack =[];

// BRUUTE FORCE
function normal(arr)
{

    for(let i=0;i<arr.length;i++)
{
    for(let j=i-1; j>=0 ;j--)
    {
        if(arr[j] < arr[i])
        {
            result[i] = arr[j];
            break;

        }
    }
}

return result;
}


// USING Monostonic stack

function mono(arr)
{
    for(let i=0;i<arr.length;i++)
    {
        while(stack1.length >0 && arr[i] <= arr[stack1[stack1.length-1]])
        {
            stack1.pop();
        }
        if(stack1.length >0)
        {
            result1[i] = arr[stack1[stack1.length-1]];
        }

        stack1.push(i);
    }
    return result1;
}

console.log( normal(arr));

console.log(mono(arr))