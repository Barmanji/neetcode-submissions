class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    setZeroes(matrix) {
          const ROWS = matrix.length,
    COLS = matrix[0].length;
  let zeroQueue = [];
  for (const [rowIndex, row] of matrix.entries()) {
    for (const [colIndex, element] of row.entries()) {
      if (element === 0) {
        zeroQueue.push([rowIndex, colIndex]);
      }
    }
  }
  const changeMatrixRowAndColToZero = (r, c) => {
        for(let i = 0; i < ROWS; i++){
            for(let j = 0; j < COLS; j++){
                if(i === r || j === c){
                    matrix[i][j] = 0
                }
            }
        }
    };
    for(const [r,c] of zeroQueue){
        changeMatrixRowAndColToZero(r,c);
    }

    }
}
