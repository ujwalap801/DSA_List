/**
 * @param {number} n
 * @return {number}
 */
var countMonobit = function(n) {

    let i =0;
    let count =0;
    while(i <=n )
    {
        let num = i.toString(2).split('').map(Number);

            let result = num.every( n => n=== num[0]);

        if(result)
        {
            count++;
        }

        i++
    }


    return count
};