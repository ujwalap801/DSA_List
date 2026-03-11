/**
 * @param {number} n
 * @return {number}
 */
var bitwiseComplement = function(n) {
    


    let s = n.toString(2);
    console.log(s);

    let flip = s.split('').map((b)=> b == '1' ? '0':'1').join('');
  return parseInt(flip, 2)
};