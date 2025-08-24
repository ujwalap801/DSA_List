
// Linear Searcg
var mySqrt = function(x) {
 let i=1;
 while(i)
 {

    let sqr = i*i;

    if(sqr >x)
    {
        return i-1;
        break;
    }else
    {
        i++;
    }

 }
};


// Binary Search
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
 
 if(x <2) return x;
 let l =2;
 let r = Math.floor(x/2);
 while(l<=r)
 {
    let m =Math.floor((l+r)/2);
 
    if(x === m**2)
    {
        return m;
    }else if(x <m**2)
    {
        r = m-1;
    }else{
        l =m+1;
    }
 }

 return r;
};