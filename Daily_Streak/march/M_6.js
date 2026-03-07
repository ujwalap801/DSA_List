/**
 * @param {string} s
 * @return {boolean}
 */
var checkOnesSegment = function (s) {


    let i=0;
    let count =0;
    while(i<s.length)
    {
        if(s[i] == '1')
        {
            count++;

            while(i<s.length && s[i] =='1')
            {
                i++;
            }
        }else{
            i++;
        }


        
    if(count >1) return false;
    }



    return true;
};


// Easy
/**
 * @param {string} s
 * @return {boolean}
 */
var checkOnesSegment = function (s) {

return !s.includes('01');
};