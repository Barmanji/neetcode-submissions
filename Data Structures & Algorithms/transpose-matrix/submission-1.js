class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number[][]}
     */
transpose(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const grid = Array.from({ length: cols }, () => new Array(rows).fill(0));
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < matrix.length; j++){
            grid[i][j] = matrix[j][i]
        }
    }
    return grid

}
}
