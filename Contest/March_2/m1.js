/**
 * @param {number[]} capacity
 * @param {number} itemSize
 * @return {number}
 */
var minimumIndex = function(capacity, itemSize) {
    
    let map =new Map();
    for(let i=0;i<capacity.length;i++)
    {
        if(capacity[i] >= itemSize)
        {
            map.set(i, capacity[i])
        }
    }

    console.log(map)
    const sorted = new Map([...map.entries()].sort((a,b)=>
    {
     return   a[1]-b[1]
    }))

let keys =[...sorted.keys()];
return keys.length >0 ? keys[0]:-1

};