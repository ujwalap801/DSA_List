
var isValidBST = function(root) {
    let isBST =(curr, lo, hi)=>
    {


if(!curr) return true;
if((lo !=null && curr.val <= lo) || (hi != null && curr.val >= hi))
{
    return false;
}

let leftBST = isBST(curr.left, lo, curr.val);
let rightBST = isBST(curr.right, curr.val, hi);

return leftBST && rightBST;


    }
    
    return isBST(root, null, null)
};