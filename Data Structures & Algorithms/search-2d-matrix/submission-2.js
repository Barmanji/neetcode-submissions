class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        
  const row = matrix.length,
    col = matrix[0].length;

  let resRow;
  for (let i = 0; i < row; i++) {
    let endElem = matrix[i][col - 1];
    if (endElem > target) {
      resRow = i;
      break;
    }
  }
    if (col === 1 && row === 1 && matrix[0][0] === target) return true

  let l = 0,
    r = col - 1;
  while (l <= r) {
    const mid = Math.floor(l + (r - l) / 2);
    if (matrix[resRow][mid] === target) return true;
    else if (matrix[resRow][mid] > target) r = mid - 1;
    else l = mid + 1;
  }
  return false;
}
}
