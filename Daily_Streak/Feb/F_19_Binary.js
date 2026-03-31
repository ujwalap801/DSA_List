

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var countPrimeSetBits = function(left, right) {
    

function isPrime(n)
{
    if(n<=1) return false;
    
    if(n== 2) return true;
    if(n %2 ==0) return false;
    
    for(let i=3; i<= Math.sqrt(n);i+=2)
    {
        if(n % i ==0) return false;
    }
    
    return true;
}

    
    
    let count =0;
    
    for(let i=left; i<=right; i++)
    {
      
        let remCount =i.toString(2).split('1').length-1;
   
        if(isPrime(remCount))
        {
            count++;
        }
        
        
    }
    
    return count;
};




// OPTIMIZATION
/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var countPrimeSetBits = function(left, right) {
    

function isPrime(n)
{
    if(n<=1) return false;
    
    if(n== 2) return true;
    if(n %2 ==0) return false;
    
    for(let i=3; i<= Math.sqrt(n);i+=2)
    {
        if(n % i ==0) return false;
    }
    
    return true;
}

    
    let set = new Set([2, 3,5, 7, 11, 13, 17, 19])
    
    let count =0;
    
    for(let i=left; i<=right; i++)
    {
      
        let remCount =i.toString(2).split('1').length-1;
   
        // if(isPrime(remCount))
        // {
        //     count++;
        // }
        if(set.has(remCount))
        {
            count++;
        }
        
        
    }
    
    return count;
};




