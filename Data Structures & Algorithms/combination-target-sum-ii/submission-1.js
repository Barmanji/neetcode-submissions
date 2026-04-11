class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        const res = [];
        // Step 1: Sort is MANDATORY for the duplicate skipping logic
        candidates.sort((a, b) => a - b);

        function dfs(i, cur, total) {
            // Base Case: Success
            if (total === target) {
                res.push([...cur]);
                return;
            }

            // Base Case: Failure
            if (total > target || i === candidates.length) {
                return;
            }

            // Decision 1: Include candidates[i]
            cur.push(candidates[i]);
            dfs(i + 1, cur, total + candidates[i]);
            cur.pop(); // Backtrack

            // Decision 2: Skip ALL duplicates of the current number
            // This ensures we don't start a new combination with the same value
            while (i + 1 < candidates.length && candidates[i] === candidates[i + 1]) {
                i++;
            }
            dfs(i + 1, cur, total);
        }

        dfs(0, [], 0);
        return res;
    }
}