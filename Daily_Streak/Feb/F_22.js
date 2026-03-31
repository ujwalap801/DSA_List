/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumRootToLeaf = function (root) {

    let sum = (root, val) => {

        if (!root) {
            return 0;
        }



        val = (2 * val) + (1 * root.val); //shift left + add current bit
        if (root.left == null && root.right == null) {
            return val;
        }



        return sum(root.left, val) + sum(root.right, val);

    }

    return sum(root, 0)

};