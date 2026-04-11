class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const stack = [];
        const res = [];

        const backtrack = (openN, closedN) => {
            // Base Case: We've used all 'n' pairs
            if (openN === n && closedN === n) {
                res.push(stack.join(""));
                return;
            }

            // Rule 1: Only add '(' if we haven't reached 'n'
            if (openN < n) {
                stack.push("(");
                backtrack(openN + 1, closedN);
                stack.pop(); // Backtrack
            }

            // Rule 2: Only add ')' if it's "legal" (less than open count)
            if (closedN < openN) {
                stack.push(")");
                backtrack(openN, closedN + 1);
                stack.pop(); // Backtrack
            }
        };

        backtrack(0, 0);
        return res;
    }
}