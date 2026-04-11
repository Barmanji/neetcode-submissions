class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        /**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
    const res = [];

    function dfs(i, cur, total) {
        // Base Case: Success
        if (total === target) {
            res.push([...cur]); // Create a shallow copy
            return;
        }

        // Base Case: Failure (Out of bounds or exceeded target)
        if (i >= nums.length || total > target) {
            return;
        }

        // Decision 1: Include nums[i]
        cur.push(nums[i]);
        dfs(i, cur, total + nums[i]);

        // Decision 2: Exclude nums[i] (Backtrack)
        cur.pop();
        dfs(i + 1, cur, total);
    }

    dfs(0, [], 0);
    return res;
};
    
}
