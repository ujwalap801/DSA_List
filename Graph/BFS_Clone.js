/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function(root) {

if(!root) return null;
    let q =[root];

    let visited = new Map();
    let cloneRoot = new Node(root.val);
    visited.set(root, cloneRoot );

    while(q.length)
    {
        let curr = q.shift();
        for(let n of curr.neighbors)
        {

            if(!visited.has(n))
        {
            q.push(n);
            visited.set(n, new Node(n.val)) ;
        }

          let cloneCurr = visited.get(curr);
           cloneCurr.neighbors.push(visited.get(n));
       
        }
    }

    
    return cloneRoot
};