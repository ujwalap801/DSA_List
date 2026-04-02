/**
 * @param {number[][]} grid
 * @param {number} x
 * @param {number} y
 * @param {number} k
 * @return {number[][]}
 */
var reverseSubmatrix = function(grid, x, y, k) {
    
    let startRow = x;
    let endRow =  x+k-1;

    let startCol =y;
    let endCol = y+k-1;

    for(let i= startRow ;i<=endRow ;i++)
    {
        for(let j=startCol ; j<=endCol; j++)
        {
            [grid[i][j],grid[endRow][j]] =  [grid[endRow][j], grid[i][j]] 
        }
        endRow--;
    }

    return grid;
};