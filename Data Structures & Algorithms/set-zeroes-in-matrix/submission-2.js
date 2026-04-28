class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    setZeroes(matrix) {

        const [ROW, COL] = [matrix.length, matrix[0].length]

        const zeroIndices = []

        for (let r = 0; r < ROW; r++) {
            for (let c = 0; c < COL; c++) {

                if (matrix[r][c] === 0) {

                    zeroIndices.push([r, c])
                }

            }
        }

        for (const [r, c] of zeroIndices) {
            for (let tC = 0; tC < COL; tC++) {
                matrix[r][tC] = 0
            }

            for (let tR = 0; tR < ROW; tR++) {
                matrix[tR][c] = 0
            }
        }

        return matrix
    }
}

// [1,2,3],
// [4,0,5],
// [6,7,8]
