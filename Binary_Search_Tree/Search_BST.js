// TOP DOWN
var searchBST = function(root, val) {
    
    let ans = null;
    let traversal =(curr)=>
    {
        if(curr.val == val)
        {
            ans = curr;
        }else{
            if(curr.val < val)
            {
                 curr.right && traversal(curr.right);
            }else{
               
                  curr.left && traversal(curr.left);
            }
        }
    }

    traversal(root);
    return ans;
};


// BOTTOM up

function searchBST(root, val) {
    if (!root) return null;

    let left = searchBST(root.left, val);
    let right = searchBST(root.right, val);

    // after recursion, decide result
    if (root.val === val) return root;

    return left || right;
}
