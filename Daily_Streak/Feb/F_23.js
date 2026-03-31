/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
  
  const countBits =(n)=>
  {
    return n.toString(2).split('1').length-1;
  }

 arr.sort(function(a, b) {

    // STEP 3: count bits for both numbers
    let bitsA = countBits(a);
    let bitsB = countBits(b);

    // STEP 4: compare by bit count first
    if (bitsA !== bitsB) {
      return bitsA - bitsB; // smaller bit count first
    }

    // STEP 5: if same bit count, compare numbers
    return a - b; // smaller number first
  });

  // STEP 6: return sorted array
  return arr;



};
