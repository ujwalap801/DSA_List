function printPeak(matrix)
{
    let rows = matrix.length;
    let cols = matrix[0].length;
    
    for(let i=0;i<rows;i++)
    {
        for(let j=0;j<cols;j++)
        {
            let curr = matrix[i][j];
            
            let top = i>0? matrix[i-1][j] : -Infinity;
            let bottom = i<rows-1 ? matrix[i+1][j] : -Infinity;
            
            let left = j >0 ? matrix[i][j-1] :-Infinity;
            
            let right = j< cols-1 ? matrix[i][j+1] :-Infinity;
            
            if(curr >= top && curr>= bottom && curr >= left && curr >= right)
            {
                return {value:curr , pos :[i,j]};
            }
        }
    }
}

console.log(printPeak([
    [10, 20,15],
    [21, 30, 14],
    
    [7, 16, 32]]))