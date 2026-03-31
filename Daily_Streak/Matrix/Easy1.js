


/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function(mat) {
    let result =0;
    let m = mat.length;
    let n = mat[0].length;


    for(let row =0;row<m ;row++)
    {
        for(let col =0;col<n;col++)
        {
            if(mat[row][col] ==0 ) continue;
       

       let special = true;
            //   check column

            for(let r =0;r<m;r++)
            {
                if(r !=row && mat[r][col] ==1)
                {
                    special = false;
                    break;
                }
            }


            // check row
            for(let c=0 ;c<n;c++)
            {
                if(c != col && mat[row][c] ==1)
                {
                    special = false;
                    break;
                }
            }


            if(special == true)
            {
                result++;
            }
        }


    }
            return result;
    
};



// Optimisesd Solution




/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function(mat) {
    let result =0;
    let m = mat.length;
    let n = mat[0].length;

    
  let row = new Array(m).fill(0);
  let col = new Array(n).fill(0);

  for(let r=0;r<m;r++)
  {
    for(let c=0; c<n;c++)
    {
        if(mat[r][c] == 1)
        {
            row[r]++;
            col[c]++;
        }
    }
  }



for(let i=0;i<m;i++)
{
    for(let j=0;j<n;j++)
    {
        if(mat[i][j] == 1 && row[i] ==1 && col[j]==1)
        {
result++;
        }
    } 
}


return result;
};