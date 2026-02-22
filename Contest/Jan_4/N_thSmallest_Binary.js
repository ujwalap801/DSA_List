
// BRUTE FORCE BINARY - tle
var nthSmallest = function(n, k) {

    let count =0;
    let num=1;

    while(true)
        {
            let ones = num.toString(2).split('1').length-1;
            if(k == ones)
            {
                count++;

                
            if(count == n)
            {
                return num;
            }
            }



            num++;
        }
};