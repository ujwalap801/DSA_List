/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function(x, y, points) {

    let min = Infinity;
    let result =-1;
    for(let i=0;i<points.length;i++)
    {

        let [px , py] = points[i];

        if(px == x || py == y)
        {
            let d = Math.abs(px -x) + Math.abs(py-y);

            if(d < min)
            {
                min =d ;
                result =i;
            }
        }
    }
    
    return result;
};