// BRUTE FORCE
/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
    
    let count =0;

    for(let i=0;i<s.length;i++)
    {
        let transform =0;
        let zero =0;
        let one =0;

        for(let j=i+1; j<s.length;i++)
        {

            if(j >i && s[j] !=s[j-1])
            {
                transform++;

                if(transform >1)
                {
                    break;
                }

            }


            if(s[j] == '0') 
            {
                zero++;
            }else{
                one++;
            }


            if(zero == one && transform ==1)
            {
                count++;
            }
        }
    }


    return count;
};



console.log(countBinarySubstrings("00110011"))


// optimise
/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
    
    let prev =0;
    let curr =1;
    let count =0;

    for(let i=1; i<s.length;i++)
    {
        if(s[i] == s[i-1])
        {
            curr++;
        }else{
            count += Math.min(prev, curr);
            prev = curr;
            curr =1;
        }
    }

    
      count += Math.min(prev, curr);
    return count;
};