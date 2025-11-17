
var kthSmallest = function(root, k) {
    
    let ans = null;
    let count =k;
    let traversal =(curr)=>
    {

if(ans != null) return;
curr.left && traversal(curr.left);
count--;
if(count ==0)
{
    ans = curr.val;

}

console.log("curr.val" +curr.val, +count)
curr.right && traversal(curr.right);
    }

    traversal(root);

    return ans;
};