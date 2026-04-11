class Solution {
    numIslands(grid) {
        if (!grid || grid.length === 0) return 0;

        const ROWS = grid.length;
        const COLS = grid[0].length;
        let islandCount = 0;

        const dfs = (r, c) => {
            // 1. Check boundaries and if the cell is water ('0')
            if (r < 0 || c < 0 || r >= ROWS || c >= COLS || grid[r][c] === '0') {
                return;
            }

            // 2. "Mark" as visited by sinking the land
            grid[r][c] = '0';

            // 3. Recursively visit all 4 neighbors (Up, Down, Left, Right)
            dfs(r + 1, c);
            dfs(r - 1, c);
            dfs(r, c + 1);
            dfs(r, c - 1);
        };

        // Loop through every cell in the grid
        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] === '1') {
                    islandCount++; // Found a new island!
                    dfs(r, c);     // Now hide the rest of this island
                }
            }
        }

        return islandCount;
    }
}